import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #007bff;
`;

const HelpButton = styled.button`
  border: 1px solid #007bff;
  color: #007bff;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 30px;
  background: #fff;
  width: 120px;
  height: 40px;
`;

const Label = styled.label`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  color: #007bff;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #007bff;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const StartButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #007bff;
  }
`;

// Main Component
const TextFileAnalysisForm = () => {
  const [filePath, setFilePath] = useState('');

  const handleStartAnalysis = () => {
    console.log('Starting analysis on:', filePath);
  };

  return (
    <Container>
      <Title>Text file analysis</Title>
      <HelpButton>Help</HelpButton>
      <Label>Enter file path</Label>
      <Input
        type="text"
        placeholder="Enter file Path"
        value={filePath}
        onChange={(e) => setFilePath(e.target.value)}
      />
      <StartButton onClick={handleStartAnalysis}>Start Analysis</StartButton>
    </Container>
  );
};

export default TextFileAnalysisForm;
