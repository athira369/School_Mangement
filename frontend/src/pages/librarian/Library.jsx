import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Table';
import LibraryForm from "../../components/LibraryForm";

function Library() {
  const [libraryRecords, setLibraryRecords] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  // Fetch library records from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/library')
      .then(response => setLibraryRecords(response.data))
      .catch(error => console.error(error));
  }, []);

  // Handle form submission for borrowing or returning books
  const handleFormSubmit = (recordData) => {
    if (isEditing) {
      // Update library record (book return)
      axios.put(`http://localhost:5000/api/library/return/${selectedRecord._id}`, recordData)
        .then(() => {
          setLibraryRecords(prev => prev.map(record => record._id === selectedRecord._id ? { ...record, ...recordData } : record));
          setIsEditing(false);
          setSelectedRecord(null);
        })
        .catch(error => console.error(error));
    } else {
      // Add new library record (borrow book)
      axios.post('http://localhost:5000/api/library/borrow', recordData)
        .then(response => setLibraryRecords([...libraryRecords, response.data]))
        .catch(error => console.error(error));
    }
  };

  // Handle editing a library record (return book)
  const handleEditRecord = (record) => {
    setIsEditing(true);
    setSelectedRecord(record);
  };

  // Table columns
  const columns = ['Student', 'Book Title', 'Borrowed On', 'Due Date', 'Returned On', 'Status', 'Actions'];

  const data = libraryRecords.map(record => ({
    ...record,
    actions: (
      <button onClick={() => handleEditRecord(record)} className="text-blue-600 hover:underline">
        Return Book
      </button>
    ),
  }));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Library</h1>
      <LibraryForm onSubmit={handleFormSubmit} record={selectedRecord} />
      <Table columns={columns} data={data} />
    </div>
  );
}

export default Library;
