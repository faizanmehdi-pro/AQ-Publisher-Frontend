import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import styled from 'styled-components';
import indexStep from '../../assets/images/indexStep.png'
import processStep from '../../assets/images/processStep.png'
import outputStep from '../../assets/images/outputStep.png'

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  position: relative;
  align-items: center;
`;

const StepIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#1976d2' : 'lightgray')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  position: relative;
  z-index: 2;
  text-align: center;
  cursor: pointer;
/* 
  img{
    width: 50px;
    height: 50px;
    position: absolute;
    top: -20px;
    right: -20px;
    z-index: 9;
    border: 1px solid black;
  } */
`;

const StepIconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: -30px;
  right: -20px;
  z-index: 9;
  border: 1px solid #1976d2;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 40px;
    height: 40px;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  border: 8px solid #f9f9f9;
  height: 100px;
`;

const CircleDetail = styled.div`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  gap: 10px;
  background-color: ${(props) => (props.active ? '#1976d2' : 'lightgray')};
  width: 100px;
  border-radius: 50px 50px 20px 20px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  top: 0;
  z-index: 1;
  text-align: left;
  padding: 0 0 20px 0;
  p{
    padding: 5px;
    text-align: center;
  }
`;

const LineContainer = styled.div`
  width: 33%;
  height: 5px;
  display: flex;
  align-items: center;
  position: relative;
`;

const Line = styled.div`
  width: 100%;
  height: 5px;
  background-color: lightgray;
  position: relative;
`;

const ProgressLine = styled.div`
  height: 5px;
  background-color: #1976d2;
  width: ${(props) => props.width || 0};
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  transition: width 0.3s ease;
`;

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepDetails, setStepDetails] = useState({
    firstStepDisplay: false,
    secondStepDisplay: false,
    thirdStepDisplay: false,
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    address: '',
    questions: []
  });

  // Update form data on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Go to the next step
  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);

  // Go back to the previous step
  const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne formData={formData} handleChange={handleChange} setFormData={setFormData} nextStep={nextStep} />;
      case 2:
        return <StepTwo formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <StepThree formData={formData} prevStep={prevStep} />;
      default:
        return <StepOne formData={formData} handleChange={handleChange} setFormData={setFormData} nextStep={nextStep} />;
    }
  };

  return (
    <div>
      <ProgressContainer>
        <ProgressBar>
          <StepIcon
            active={currentStep >= 1}
            onMouseEnter={() => setStepDetails({ ...stepDetails, firstStepDisplay: true })}
            onMouseLeave={() => setStepDetails({ ...stepDetails, firstStepDisplay: false })}
          >
            {/* <StepIconContainer>
              <img src={indexStep} alt='icon' />
            </StepIconContainer> */}
            Add Index Fields
            <CircleDetail isVisible={stepDetails.firstStepDisplay} active={currentStep >= 1}>
                <Circle>Add Index Fields</Circle>
                <p>Define the index fields that you want to extract from the document.</p>
            </CircleDetail>
          </StepIcon>

          <LineContainer>
            <Line>
              <ProgressLine width={`${currentStep >= 2 ? 100 : 0}%`} />
            </Line>
          </LineContainer>

          <StepIcon
            active={currentStep >= 2}
            onMouseEnter={() => setStepDetails({ ...stepDetails, secondStepDisplay: true })}
            onMouseLeave={() => setStepDetails({ ...stepDetails, secondStepDisplay: false })}
          >
            {/* <StepIconContainer>
              <img src={processStep} alt='icon' />
            </StepIconContainer> */}
            Processes
            <CircleDetail isVisible={stepDetails.secondStepDisplay} active={currentStep >= 2}>
                <Circle>Processes</Circle>
                <p>Select the processes that you want to run on the given document.</p>
            </CircleDetail>
          </StepIcon>

          <LineContainer>
            <Line>
              <ProgressLine width={`${currentStep === 3 ? 100 : 0}%`} />
            </Line>
          </LineContainer>

          <StepIcon
            active={currentStep >= 3}
            onMouseEnter={() => setStepDetails({ ...stepDetails, thirdStepDisplay: true })}
            onMouseLeave={() => setStepDetails({ ...stepDetails, thirdStepDisplay: false })}
          >
            {/* <StepIconContainer>
              <img src={outputStep} alt='icon' />
            </StepIconContainer> */}
            Output
            <CircleDetail isVisible={stepDetails.thirdStepDisplay} active={currentStep >= 3}>
                <Circle>Output</Circle>
                <p> Select the type of output that you want to export the results.</p>
            </CircleDetail>
          </StepIcon>
        </ProgressBar>
      </ProgressContainer>

      {renderStep()}
    </div>
  );
};

export default MultiStepForm;
