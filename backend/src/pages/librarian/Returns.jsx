import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReturns } from '../../redux/actions/returnActions';
import Sidebar from './Sidebar';
import { 
  ReturnsContainer, 
  Title, 
  TableContainer, 
  StyledTable, 
  FallbackMessage, 
  LoadingMessage, 
  ErrorMessage, 
  TableRowHover, 
  TableCell 
} from '../../styles/ReturnStyles';

const Returns = () => {
  const dispatch = useDispatch();
  const { returns, loading, error } = useSelector((state) => state.returns);

  useEffect(() => {
    dispatch(fetchReturns());
  }, [dispatch]);

  const returnsData = Array.isArray(returns) ? returns : [];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar /> {/* Fixed Sidebar */}
    <ReturnsContainer>
      <Title>Returns</Title>

      {/* Loading and error handling */}
      {loading ? (
        <LoadingMessage>Loading returns...</LoadingMessage>
      ) : error ? (
        <ErrorMessage>Error: {error}</ErrorMessage>
      ) : returnsData.length > 0 ? (
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                <th>Book Title</th>
                <th>Member Name</th>
                <th>Return Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {returnsData.map((returned) => (
                <TableRowHover key={returned.id}>
                  <TableCell>{returned.bookTitle || 'N/A'}</TableCell>
                  <TableCell>{returned.memberName || 'N/A'}</TableCell>
                  <TableCell>{returned.date || 'N/A'}</TableCell>
                  <TableCell>{returned.status || 'N/A'}</TableCell>
                </TableRowHover>
              ))}
            </tbody>
          </StyledTable>
        </TableContainer>
      ) : (
        <FallbackMessage colSpan={4}>No returns found.</FallbackMessage>
      )}
    </ReturnsContainer>
    </div>
  );
};

export default Returns;
