import React, { useState } from 'react';
import styled from 'styled-components';
import SortByName from './SortByName';
import GroupFiles from './GroupFiles';

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
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 20px;
  color: #333;
  margin: 10px 0;
  text-transform: uppercase;
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
const FirstPage = ({ onBack }) => (
  <PageContent>
    <SortByName onBack={onBack} />
  </PageContent>
);

const SecondPage = ({ onBack }) => (
  <PageContent>
    <GroupFiles onBack={onBack} />
  </PageContent>
);

// Main Component
const MCTools = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const handleCardClick = (page) => {
    setSelectedPage(page);
  };

  const handleBackClick = () => {
    setSelectedPage(null);
  };

  // if (selectedPage === 'FirstPage') {
  //   return <FirstPage onBack={handleBackClick} />;
  // } else if (selectedPage === 'SecondPage') {
  //   return <SecondPage onBack={handleBackClick} />;
  // }\|

  return (
    <Container>
      <Card onClick={() => handleCardClick('FirstPage')}>
        <Icon>📄</Icon> {/* Document icon for moving pages */}
        <Title>Move Pages in file</Title>
        <Description>Rearrange or move pages within a PDF document easily.</Description>
      </Card>
      <Card onClick={() => handleCardClick('SecondPage')}>
        <Icon>📂</Icon> {/* Folder with content to represent moving content */}
        <Title>Find & Move Content</Title>
        <Description>Search and relocate specific content within your PDF documents.</Description>
      </Card>
    </Container>
  );
};

export default MCTools;
