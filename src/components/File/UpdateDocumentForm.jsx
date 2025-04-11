import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 8px;
  border: 1px solid #1976d2;
  outline: none;
  font-size: 16px;
  transition: border-color 0.3s ease;
  height: 45px;

  &:focus {
    border-color: #0056b3;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-top: 5px;
  border-radius: 8px;
  border: 1px solid #1976d2;
  outline: none;
  font-size: 16px;
  transition: border-color 0.3s ease;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 8px;
  border: 1px solid #1976d2;
  outline: none;
  font-size: 16px;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const RadioField = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
`;

const RadioInput = styled.input`
    width: 16px;
    height: 16px;
    margin-bottom: 3px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 0 0 15px;
`;

const CheckboxField = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
`;

const CheckboxInput = styled.input`
    width: 16px;
    height: 16px;
    margin-bottom: 2px;
`;

const CombinedFields = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 30px;
`;

const Button = styled.button`
  padding: 12px 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  border-radius: 8px;
  width: 100%;

  &:hover {
    transform: scale(1.05);
  }

  ${({ type }) => type === 'submit' && `
    background-color: #1976d2;
    color: white;

    &:hover {
      background-color: #386aa3;
    }
  `}

  ${({ type }) => type === 'button' && `
    background: none;
    color: #1976d2;
    border: 1px solid #1976d2;

    &:hover {
      background-color: #e3f2fd;
    }
  `}
`;

const UpdateDocumentForm = () => {
  const [formData, setFormData] = useState({
    documentType: '',
    lawNumber: '',
    year: '',
    date: '',
    name: '',
    fileName: '',
    status: '',
    index: false,
    title: false,
    completed: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Document Type</Label>
        <RadioGroup>
          <RadioField>
            <RadioInput
              type="radio"
              name="documentType"
              value="Law"
              checked={formData.documentType === 'Law'}
              onChange={handleInputChange}
            />
            Law
          </RadioField>
          <RadioField>
            <RadioInput
              type="radio"
              name="documentType"
              value="Joint Resolution"
              checked={formData.documentType === 'Joint Resolution'}
              onChange={handleInputChange}
            />
            Joint Resolution
          </RadioField>
          <RadioField>
            <RadioInput
              type="radio"
              name="documentType"
              value="Agencies Regulations"
              checked={formData.documentType === 'Agencies Regulations'}
              onChange={handleInputChange}
            />
            Agencies Regulations
          </RadioField>
          <RadioField>
            <RadioInput
              type="radio"
              name="documentType"
              value="Municipal Regulation"
              checked={formData.documentType === 'Municipal Regulation'}
              onChange={handleInputChange}
            />
            Municipal Regulation
          </RadioField>
        </RadioGroup>
      </FormGroup>

      <CombinedFields>
        <FormGroup>
          <Label>Law Number</Label>
          <Input
            type="text"
            name="lawNumber"
            placeholder='Enter Law Number'
            value={formData.lawNumber}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Year</Label>
          <Input
            type="number"
            name="year"
            placeholder='Enter Year'
            value={formData.year}
            onChange={handleInputChange}
          />
        </FormGroup>
      </CombinedFields>

      <CombinedFields>
        <FormGroup>
          <Label>Date</Label>
          <Input
            type="date"
            name="date"
            placeholder='Enter Date'
            value={formData.date}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Status</Label>
          <Select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="">Select Status</option>
            <option value="Draft">Active</option>
            <option value="Published">Amended</option>
            <option value="Archived">Repealed</option>
          </Select>
        </FormGroup>
      </CombinedFields>

      <CombinedFields>
        <FormGroup>
          <Label>File Name</Label>
          <Input
            type="text"
            name="fileName"
            placeholder='Enter File Name'
            value={formData.fileName}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Choose File</Label>
          <Input
            type="file"
            name="file"
            onChange={(e) => console.log(e.target.files[0])} // handle file upload logic
          />
        </FormGroup>
      </CombinedFields>

      <CombinedFields>
        <FormGroup>
          <Label>Name</Label>
          <Textarea
            type="text"
            name="name"
            placeholder='Enter Name'
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <CheckboxGroup>
            <CheckboxField>
              <CheckboxInput
                type="checkbox"
                name="index"
                checked={formData.index}
                onChange={handleInputChange}
              />
              Index
            </CheckboxField>
            <CheckboxField>
              <CheckboxInput
                type="checkbox"
                name="title"
                checked={formData.title}
                onChange={handleInputChange}
              />
              Title
            </CheckboxField>
            <CheckboxField>
              <CheckboxInput
                type="checkbox"
                name="completed"
                checked={formData.completed}
                onChange={handleInputChange}
              />
              Completed
            </CheckboxField>
          </CheckboxGroup>
        </FormGroup>
      </CombinedFields>

      <ButtonGroup>
        <Button type="button">Pre Title</Button>
        <Button type="button">Get Title</Button>
        <Button type="button">Cancel</Button>
        <Button type="submit">Update Document</Button>
      </ButtonGroup>
    </Form>
  );
};

export default UpdateDocumentForm;
