import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import { fetchBorrowRequests } from "../../redux/actions/borrowActions" // Redux actions
import {
  BorrowRequestsContainer,
  Title,
  TableContainer,
  StyledTable,
  FallbackMessage,
} from "../../styles/BorrowRequestStyles";

const BorrowRequests = () => {
  const dispatch = useDispatch();
  const { borrowRequests } = useSelector(state => state.borrowRequests); // Redux state for borrow requests

  useEffect(() => {
    dispatch(fetchBorrowRequests());
  }, [dispatch]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar /> {/* Fixed Sidebar */}
    <BorrowRequestsContainer>
      <Title>Borrow Requests</Title>
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Member Name</th>
              <th>Request Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(borrowRequests) && borrowRequests.length > 0 ? (
              borrowRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.bookTitle}</td>
                  <td>{request.memberName}</td>
                  <td>{request.date}</td>
                  <td>{request.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <FallbackMessage colSpan="4">
                  No borrow requests available.
                </FallbackMessage>
              </tr>
            )}
          </tbody>
        </StyledTable>
      </TableContainer>
    </BorrowRequestsContainer>
    </div>
  );
};
export default BorrowRequests;