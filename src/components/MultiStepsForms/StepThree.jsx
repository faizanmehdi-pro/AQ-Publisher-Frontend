import React from 'react';
import styled from 'styled-components'; // Import styled-components

// Styled Components
const StepThreeContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const StepTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1976d2;
`;

const FieldGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #1976d2;
  margin-bottom: 10px;
  display: block;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

const StepButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const BackButton = styled.button`
  background: none;
  color: #1890ff;
  padding: 10px 20px;
  border: 1px solid #1890ff;
  border-radius: 4px;
  cursor: pointer;
`;

const NextButton = styled.button`
  background-color: #1890ff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #005bb5;
  }
`;

const StepThree = ({ formData, handleChange, prevStep, nextStep }) => {
  return (
    <StepThreeContainer>
      <StepTitle>Output</StepTitle>
      
      <FieldGroup>
        <Label>Select Output Type</Label>
        <RadioGroup>
          <RadioOption>
            <RadioInput
              type="radio"
              name="outputType"
              value="PDF"
              checked={formData.outputType === 'PDF'}
              onChange={handleChange}
            />
            PDF
          </RadioOption>
          <RadioOption>
            <RadioInput
              type="radio"
              name="outputType"
              value="CSV"
              checked={formData.outputType === 'CSV'}
              onChange={handleChange}
            />
            CSV
          </RadioOption>
          <RadioOption>
            <RadioInput
              type="radio"
              name="outputType"
              value="Image"
              checked={formData.outputType === 'Image'}
              onChange={handleChange}
            />
            Image
          </RadioOption>
        </RadioGroup>
      </FieldGroup>

      <StepButtons>
        <NextButton onClick={prevStep}>Back</NextButton>
        <NextButton onClick={nextStep}>Next</NextButton>
      </StepButtons>
    </StepThreeContainer>
  );
};

export default StepThree;
