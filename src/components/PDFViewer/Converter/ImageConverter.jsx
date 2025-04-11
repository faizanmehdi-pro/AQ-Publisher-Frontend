// ConvertImageButton.jsx
import React from 'react';

const ConvertImage = ({ canvasRef, pageNumber }) => {
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

  return (
    <button onClick={convertPageToImage}>Convert Page to Image</button>
  );
};

export default ConvertImage;
