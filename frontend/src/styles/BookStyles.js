import styled from 'styled-components';



export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
`;

export const AddButton = styled.button`
  margin-top: 16px;
  padding: 10px 16px;
  background-color: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3730a3;
  }

  &:active {
    background-color: #312e81;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:focus {
    border-color: #4f46e5;
    outline: none;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.th`
  background-color: #4f46e5;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 16px;
  text-align: left;
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 12px 16px;
  font-size: 0.9rem;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #f3f4f6;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ef4444;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dc2626;
  }

  &:active {
    background-color: #b91c1c;
  }
`;

export const EmptyState = styled.div`
  margin-top: 20px;
  font-size: 1rem;
  color: #666;
  text-align: center;
`;

export const LoadingState = styled.div`
  margin-top: 20px;
  font-size: 1rem;
  color: #4f46e5;
  text-align: center;
`;
// export const SidebarContainer = styled.div`
//   flex: 0 0 250px;
// // `;
// export const Content = styled.div`
//   flex: 1;
// `;
export const Container = styled.div`
  display: flex;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
`;

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #2c3e50;
  color: white;
  height: 100vh;
  position: fixed;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  margin-right: ${({ isOpen }) => (isOpen ? '650px' : '300px')}; /* Adjust margin on the right side based on sidebar state */
  margin-left: 300px; /* Ensure no margin on the left side */
  transition: margin-right 0.3s ease;
  background-color: #f9f9f9;
`;

