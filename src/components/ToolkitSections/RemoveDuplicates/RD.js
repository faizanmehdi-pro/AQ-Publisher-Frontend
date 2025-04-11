import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteBlankPage from './DeleteBlankPage';
import DeleteDuplicatePage from './DeleteDuplicatePage';
import DeleteDuplicateFile from './DeleteDuplicateFile';
import DeletePageContent from './DeletePageContent';

// Styled Components
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 50px 20px 20px 20px;
`;

const Card = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
  cursor: pointer;
`;

const Icon = styled.div`
  font-size: 40px;
  color: #ff5e57;
`;

const Title = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #777;
`;

const PageContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// Page Components
const DeleteBlankPages = ({ onBack }) => (
  <PageContent>
    <DeleteBlankPage onBack={onBack}/>
  </PageContent>
);

const DeleteDuplicatePages = ({ onBack }) => (
  <PageContent>
    <DeleteDuplicatePage onBack={onBack} />
  </PageContent>
);

const DeleteDuplicateFiles = ({ onBack }) => (
  <PageContent>
    <DeleteDuplicateFile onBack={onBack} />
  </PageContent>
);

const DeletePagesByContent = ({ onBack }) => (
  <PageContent>
    <DeletePageContent onBack={onBack} />
  </PageContent>
);

// Main Component
const RD = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const handleCardClick = (page) => {
    setSelectedPage(page);
  };

  const handleBackClick = () => {
    setSelectedPage(null);
  };

  // Conditional rendering based on selectedPage state
  if (selectedPage === 'DeleteBlankPages') {
    return <DeleteBlankPages onBack={handleBackClick} />;
  } else if (selectedPage === 'DeleteDuplicatePages') {
    return <DeleteDuplicatePages onBack={handleBackClick} />;
  } else if (selectedPage === 'DeleteDuplicateFiles') {
    return <DeleteDuplicateFiles onBack={handleBackClick} />;
  } else if (selectedPage === 'DeletePagesByContent') {
    return <DeletePagesByContent onBack={handleBackClick} />;
  }

  // Default view (Card grid)
  return (
    <Container>
      <Card onClick={() => handleCardClick('DeleteBlankPages')}>
        <Icon>🗑️</Icon>
        <Title>Delete Blank Pages</Title>
        <Description>Automatically remove blank pages from your PDF file.</Description>
      </Card>
      
      {/* <Card onClick={() => handleCardClick('DeleteDuplicatePages')}>
        <Icon>📑</Icon>
        <Title>Delete Duplicate Pages</Title>
        <Description>Identify and remove duplicate pages in your PDF file.</Description>
      </Card>
      
      <Card onClick={() => handleCardClick('DeleteDuplicateFiles')}>
        <Icon>🗃️</Icon>
        <Title>Delete Duplicate Files</Title>
        <Description>Find and remove duplicate PDF files from your system.</Description>
      </Card> */}
      
      <Card onClick={() => handleCardClick('DeletePagesByContent')}>
        <Icon>📝</Icon>
        <Title>Delete Pages by Content</Title>
        <Description>Remove pages based on specific content criteria in your PDF.</Description>
      </Card>
    </Container>
  );
};

export default RD;
