import styled from 'styled-components';

export const AdminSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(45deg, #FF69B4, #FFA07A, #90EE90); /* Gradient background */
  min-height: 100vh; /* Full height of the viewport */
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 300px; /* Limit form width */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 500px) {
    width: 90%;
    max-width: 280px;
    padding: 15px;
  }
`;

export const InputField = styled.input.attrs(() => ({
  'aria-label': 'Input field', // Accessibility label
}))`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #FF4500;
    box-shadow: 0 0 4px rgba(255, 69, 0, 0.5);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: #FF4500;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF6347;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CustomComponent = styled.span.attrs(({ isOpen }) => ({
  'data-is-open': isOpen, // Avoid passing props to DOM
}))`
  color: ${(props) => (props.isOpen ? 'green' : 'red')};
`;
