import styled from "styled-components";

// Container for the Reports page
export const ReportsContainer = styled.div`
flex: 1;
  padding: 20px;
  margin-left: 250px; /* Adjust for sidebar width */
  background-color: #f9f9f9; /* Light background */
  min-height: 100vh;;
`



;

// Page title for the Reports page
export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

// Section for selecting a report
export const ReportSelectionSection = styled.div`
  margin-top: 30px;
`;

// Description for the report selection
export const Description = styled.p`
  font-size: 18px;
  color: #555;
`;

// List for reports
export const ReportList = styled.ul`
  list-style-type: disc;
  padding-left: 24px;
  font-size: 16px;
  color: #333;
`;

// List item for each report
export const ReportItem = styled.li`
  margin-bottom: 8px;
  cursor: pointer;  // This will change the cursor to pointer when hovered over
`;

// Button to generate the report
export const GenerateButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;
// Form container for dynamic report inputs
export const FormContainer = styled.div`
  margin-top: 20px;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Input fields for the forms
export const InputField = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

// Label for the input fields
export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  color: #333;
`;
export const ReportTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableHeader = styled.th`
  background-color: #3498db;
  color: white;
  padding: 10px;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

// Container for each form group, used to structure the form fields
export const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

// Label for the form fields, usually displayed above the input
export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
`;

// Styled input field with focus effect
export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #3498db;
  }

  // Adding some styles for invalid inputs
  &.error {
    border-color: #e74c3c;
  }
`;

// Styled alert message for validation feedback or errors
export const AlertMessage = styled.span`
  font-size: 12px;
  color: #e74c3c;
  margin-top: 5px;
  font-style: italic;
`;
