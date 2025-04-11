import React, { useState } from 'react';
import styled from 'styled-components';
import SearchFileViaCSV from './SearchFileViaCSV';
import SearchFolderViaCSV from './SearchFolderViaCSV';
import SearchDuplicateFiles from './SearchDuplicateFiles';
import SearchDuplicateContent from './SearchDuplicateContent';
import SearchDuplicteFolder from './SearchDuplicteFolder';

// Styled Components
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
const FirstPage = ({ onBack }) => (
  <PageContent>
    <SearchFileViaCSV onBack={onBack}/>
  </PageContent>
);

const SecondPage = ({ onBack }) => (
  <PageContent>
    <SearchFolderViaCSV onBack={onBack} />
  </PageContent>
);

const ThirdPage = ({ onBack }) => (
  <PageContent>
    <SearchDuplicateFiles onBack={onBack} />
  </PageContent>
);

const FourthPage = ({ onBack }) => (
  <PageContent>
    <SearchDuplicateContent onBack={onBack} />
  </PageContent>
);

const FifthPage = ({ onBack }) => (
  <PageContent>
    <SearchDuplicteFolder onBack={onBack} />
  </PageContent>
);

// Main Component
const FC = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const handleCardClick = (page) => {
    setSelectedPage(page);
  };

  const handleBackClick = () => {
    setSelectedPage(null);
  };

  if (selectedPage === 'FirstPage') {
    return <FirstPage onBack={handleBackClick} />;
  } else if (selectedPage === 'SecondPage') {
    return <SecondPage onBack={handleBackClick} />;
  } else if (selectedPage === 'ThirdPage') {
    return <ThirdPage onBack={handleBackClick} />;
  } else if (selectedPage === 'FourthPage') {
    return <FourthPage onBack={handleBackClick} />;
  } else if (selectedPage === 'FifthPage') {
    return <FifthPage onBack={handleBackClick} />;
  }

  return (
    <Container>
      <Card onClick={() => handleCardClick('FirstPage')}>
        <Icon>📜</Icon>
        <Title>Search Files via CSV</Title>
        <Description>Automatically search files via CSV.</Description>
      </Card>
      
      <Card onClick={() => handleCardClick('SecondPage')}>
        <Icon>📁</Icon>
        <Title>Search Folders via CSV</Title>
        <Description>Identify and search folders via CSV.</Description>
      </Card>
      
      {/* <Card onClick={() => handleCardClick('ThirdPage')}>
        <Icon>🗃️</Icon>
        <Title>Search Duplicate Files</Title>
        <Description>Find and highlight duplicate files.</Description>
      </Card> */}
      
      <Card onClick={() => handleCardClick('FourthPage')}>
        <Icon>📄</Icon>
        <Title>Search Duplicate Content</Title>
        <Description>Search and highlight duplicate content.</Description>
      </Card>

      {/* <Card onClick={() => handleCardClick('FifthPage')}>
        <Icon>📂</Icon>
        <Title>Search Duplicate Folders</Title>
        <Description>Find and highlight duplicate folders.</Description>
      </Card> */}
    </Container>
  );
};

export default FC;
