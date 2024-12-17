import styled from "styled-components";

// Main container for the Borrow Requests page
export const BorrowRequestsContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 250px; /* Adjust for sidebar width */
  background-color: #f9f9f9; /* Light background */
  min-height: 100vh;
`;

// Page title
export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

// Table container to manage overflow for responsiveness
export const TableContainer = styled.div`
  overflow-x: auto;
`;

// Styled Table
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

