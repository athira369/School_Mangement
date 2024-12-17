import styled from "styled-components";

export const MembersContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 250px; /* Matches the sidebar width */
  background-color: #f9f9f9; /* Light background for the content */
  min-height: 100vh; /* Full height */
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #3498db;
    color: white;
  }

  td {
    background-color: #ffffff;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const NoMembersMessage = styled.td`
  text-align: center;
  padding: 20px;
  color: #555;
`;
