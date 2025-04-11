import { useState, useRef, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import './PDFViewer.css';
import pdfFile from '../../../assets/ZXYQIGUA.pdf';

// Text layer for React-PDF.
import 'react-pdf/dist/Page/TextLayer.css';

// Importing the PDF.js worker.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const PDFViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1); // Initialize scale
    const canvasRef = useRef(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () =>
        setPageNumber(prevPage => (prevPage - 1 <= 1 ? 1 : prevPage - 1));

    const goToNextPage = () =>
        setPageNumber(prevPage => (prevPage + 1 >= numPages ? numPages : prevPage + 1));

    // Capture canvas when the page is rendered
    const captureCanvas = () => {
        const renderedCanvas = document.querySelector('.react-pdf__Page__canvas');
        if (renderedCanvas) {
            canvasRef.current = renderedCanvas;
        }
    };

    // Convert the current page to an image
    const convertPageToImage = () => {
        if (canvasRef.current) {
            const imgData = canvasRef.current.toDataURL('image/png');
            // Create a link element and simulate a download
            const link = document.createElement('a');
            link.href = imgData;
            link.download = `page-${pageNumber}.png`;
            link.click();
        }
    };

    // Function to calculate scale based on window width
    const calculateScale = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 1400) {
            setScale(0.35); // Mobile
        } else if (windowWidth <= 900) {
            setScale(0.75); // Tablet
        } else {
            setScale(0.5); // Desktop
        }
    };

    // Set up the scale calculation on mount and resize
    useEffect(() => {
        calculateScale(); // Initial calculation
        window.addEventListener('resize', calculateScale); // Update scale on resize
        return () => {
            window.removeEventListener('resize', calculateScale); // Cleanup on unmount
        };
    }, []);
    

    return (
        <div className="page">
            <nav>
                <div className="left">
                    <button onClick={goToPrevPage} disabled={pageNumber <= 1}>Prev</button>
                    <button onClick={goToNextPage} disabled={pageNumber >= numPages}>Next</button>
                </div>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <button onClick={convertPageToImage}>Convert Page to Image</button>
            </nav>

            <Document
                file={pdfFile}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page 
                    scale={scale} // Use dynamic scale
                    pageNumber={pageNumber} 
                    onRenderSuccess={captureCanvas}  // Capture canvas after rendering
                />
            </Document>
        </div>
    );
};

export default PDFViewer;
