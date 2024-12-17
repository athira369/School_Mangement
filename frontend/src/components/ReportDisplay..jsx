import React from 'react';

// Styled components for the report display
import { ReportTable, TableRow, TableHeader, TableCell } from '../styles/ReportStyles';

const ReportDisplay = ({ reportData, selectedReport }) => {
  // Function to render the Books Report
  const renderBooksReport = (data) => {
    return (
      <ReportTable>
        <thead>
          <tr>
            <TableHeader>Title</TableHeader>
            <TableHeader>Author</TableHeader>
            <TableHeader>Copies Available</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((book, index) => (
            <TableRow key={index}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.copiesAvailable}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </ReportTable>
    );
  };

  // Function to render the Member Report
  const renderMemberReport = (data) => {
    return (
      <ReportTable>
        <thead>
          <tr>
            <TableHeader>Member ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Books Borrowed</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((member, index) => (
            <TableRow key={index}>
              <TableCell>{member.memberId}</TableCell>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.booksBorrowed}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </ReportTable>
    );
  };

  // Function to render Borrowing History Report
  const renderBorrowingHistoryReport = (data) => {
    return (
      <ReportTable>
        <thead>
          <tr>
            <TableHeader>Member ID</TableHeader>
            <TableHeader>Book Title</TableHeader>
            <TableHeader>Borrow Date</TableHeader>
            <TableHeader>Return Date</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((history, index) => (
            <TableRow key={index}>
              <TableCell>{history.memberId}</TableCell>
              <TableCell>{history.bookTitle}</TableCell>
              <TableCell>{history.borrowDate}</TableCell>
              <TableCell>{history.returnDate}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </ReportTable>
    );
  };

  // Render the appropriate report based on the selected report type
  const renderReport = () => {
    switch (selectedReport) {
      case 'Books Report':
        return renderBooksReport(reportData);
      case 'Member Report':
        return renderMemberReport(reportData);
      case 'Borrowing History':
        return renderBorrowingHistoryReport(reportData);
      default:
        return <p>No report selected.</p>;
    }
  };

  return (
    <div>
      <h2>{selectedReport}</h2>
      {renderReport()}
    </div>
  );
};

export default ReportDisplay;
