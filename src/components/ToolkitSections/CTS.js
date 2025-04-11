import { useState, useRef, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import styled from 'styled-components';
import 'react-pdf/dist/Page/TextLayer.css'; // Text layer for React-PDF.

// Importing the PDF.js worker.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const CTS = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1); // Initialize scale
    const [file, setFile] = useState(null); // State for dynamic file selection
    const [fileName, setFileName] = useState(''); // State to hold the file name
    const [searchableText, setSearchableText] = useState(''); // State for extracted text
    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const captureCanvas = () => {
        const renderedCanvas = document.querySelector('.react-pdf__Page__canvas');
        if (renderedCanvas) {
            canvasRef.current = renderedCanvas;
        }
    };

    // Function to calculate scale based on window width
    const calculateScale = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 1400) {
            setScale(0.39); // Mobile
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

    // Handle file input change
    const handleFileChange = (event) => {
        const chosenFile = event.target.files[0];
        if (chosenFile) {
            setFile(URL.createObjectURL(chosenFile));
            setFileName(chosenFile.name); // Update file name state
        }
    };

    // Trigger file input click
    const handleFileButtonClick = () => {
        fileInputRef.current.click();
    };

    // Extract text from the current PDF page (dummy for now)
    const extractTextFromPage = async () => {
        // Implement text extraction logic here
    };

    return (
        <>
            {file ? (
                <PDFViewerWrapper>
                    <Nav>
                        <FileInfo>
                          Selected File: {fileName ? <span> {fileName}</span> : null}
                        </FileInfo>

                        <Button onClick={extractTextFromPage}>Convert to Searchable</Button>
                    </Nav>

                    <PageInfo>
                        Page {pageNumber} of {numPages}
                    </PageInfo>

                    <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page scale={scale} pageNumber={pageNumber} onRenderSuccess={captureCanvas} />
                    </Document>

                    {searchableText && (
                        <SearchableText>
                            <h3>Searchable Text from Page {pageNumber}:</h3>
                            <p>{searchableText}</p>
                        </SearchableText>
                    )}
                </PDFViewerWrapper>
            ) : (
                <FileInputButton>
                    <h2>Convert Scaned PDF files into selectable and searchable PDF with high accuracy.</h2>
                    <FileInput ref={fileInputRef} type="file" onChange={handleFileChange} accept="application/pdf" />
                    <FileButton onClick={handleFileButtonClick}>Choose PDF File</FileButton>
                </FileInputButton>
            )}
        </>
    );
};

export default CTS;

// Styled Components
const PDFViewerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
`;

const Button = styled.button`
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:disabled {
        background-color: #d3d3d3;
        cursor: not-allowed;
    }
`;

const FileInfo = styled.div`
    margin-right: 20px;
    font-size: 16px;
    font-weight: 500;
    color: #1976d2;
    font-weight: bold;

    span{
        font-weight: 500;
    }
`;

const PageInfo = styled.p`
    margin: 0 15px;
    color: #1976d2;
`;

const SearchableText = styled.div`
    margin-top: 20px;
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
    max-width: 90%;
    word-wrap: break-word;

    h3 {
        margin-bottom: 10px;
    }
`;


const FileInputButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100&;
    height: 100%;
    gap: 20px;
    margin-top: 50px;

    h2{
        color: #1976d2;
        text-align: center;
        width: 700px;
    }
`;

const FileInput = styled.input`
    display: none;
`;

const FileButton = styled.button`
    padding: 15px 40px;
    background-color: #007bff;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;
