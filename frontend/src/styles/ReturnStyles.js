import styled from "styled-components";

// Main container for the Returns page
export const ReturnsContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 250px; /* Adjust for sidebar width */
  background-color: #f9f9f9; /* Light background */
  min-height: 100vh;
`;

// Page title for the Returns page
export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

// Table container for responsive overflow handling
export const TableContainer = styled.div`
  overflow-x: auto;
`;

// Styled Table for the Returns data
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #3498db;
    color: #fff;
    text-transform: uppercase;
  }

  td {
    background-color: #fff;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

// Fallback message for empty or error states
export const FallbackMessage = styled.td`
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: #555;
  font-style: italic;
`;

// Loading state message
export const LoadingMessage = styled.p`
  color: #666;
  font-size: 16px;
`;

// Error state message
export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: bold;
`;

// Row hover effect for table rows
export const TableRowHover = styled.tr`
  &:hover {
    background-color: #f9f9f9;
  }
`;

// Column-specific styles for the Returns table
export const TableCell = styled.td`
  padding: 12px;
  text-align: left;
  background-color: #fff;
`;
