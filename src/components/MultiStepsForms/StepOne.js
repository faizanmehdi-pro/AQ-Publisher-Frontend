import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // Ensure to install react-icons
import styled from "styled-components"; // Import styled-components

// Styled Components
const StepOneContainer = styled.div`
  max-width: 600px;
  margin: 30px auto;
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

const ValueGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputLabel = styled.input`
  width: 100%;
  font-size: 16px;
  border: none;
  background: none;
  color: #1976d2;
`;

const InputField = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

const InputValueText = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: 1px solid #1976d2;
  color: #1976d2;
  border-radius: 4px;
`;

const DeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #1976d2;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #1976d2;
`;

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #1976d2;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0;
  border: 1px solid #1976d2;
`;

const StepButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const BackButton = styled.button`
  background-color: #f0f0f0;
  color: #999;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: not-allowed;
`;

const NextButton = styled.button`
  background-color: #1976d2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #005bb5;
  }
`;

const StepOne = ({ formData, setFormData, nextStep }) => {
  const [values, setValues] = useState(
    formData.values
      ? formData.values.map((v, index) => ({
          id: index,
          label: v.label || `Label ${index + 1}`,
          value: v.value,
        }))
      : [{ id: Date.now(), label: "", value: "" }]
  );

  // Function to handle the addition of a new value
  const addValue = () => {
    setValues([...values, { id: Date.now(), label: "", value: "" }]);
  };

  // Function to handle deletion of a value
  const deleteValue = (id) => {
    setValues(values.filter((v) => v.id !== id));
  };

  // Function to update the value text
  const updateValue = (id, fieldType, newValue) => {
    setValues(values.map((v) => (v.id === id ? { ...v, [fieldType]: newValue } : v)));
  };

  // Handle the "Next" button click
  const handleNext = () => {
    setFormData({
      ...formData,
      values: values.map((v) => ({ label: v.label, value: v.value })),
    });
    nextStep();
  };

  useEffect(() => {
    if (formData.values) {
      setValues(
        formData.values.map((v, index) => ({
          id: index,
          label: v.label || `Label ${index + 1}`,
          value: v.value,
        }))
      );
    }
  }, [formData.values]);

  return (
    <StepOneContainer>
      <StepTitle>Add Index Fields</StepTitle>

      {values.map((v, index) => (
        <ValueGroup key={v.id}>
          <InputLabel
            type="text"
            placeholder={`Enter Label ${index + 1}`}
            value={v.label}
            onChange={(e) => updateValue(v.id, "label", e.target.value)}
          />
          <InputField>
            <InputValueText
              type="text"
              placeholder={`Enter Value ${index + 1}`}
              value={v.value}
              onChange={(e) => updateValue(v.id, "value", e.target.value)}
            />
            <DeleteButton onClick={() => deleteValue(v.id)}>
              <AiOutlineMinus />
            </DeleteButton>
          </InputField>
        </ValueGroup>
      ))}

      <AddButton onClick={addValue}>
        <AiOutlinePlus /> Add Field
      </AddButton>

      <StepButtons>
        <NextButton onClick={handleNext}>Next</NextButton>
      </StepButtons>
    </StepOneContainer>
  );
};

export default StepOne;
