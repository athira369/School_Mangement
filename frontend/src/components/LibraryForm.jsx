import React, { useState } from 'react';

function LibraryForm({ onSubmit, record }) {
  const [studentId, setStudentId] = useState(record?.student || '');
  const [bookTitle, setBookTitle] = useState(record?.bookTitle || '');
  const [dueDate, setDueDate] = useState(record?.dueDate || '');
  const [returnedOn, setReturnedOn] = useState(record?.returnedOn || '');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const recordData = {
      studentId,
      bookTitle,
      dueDate,
      returnedOn,
    };
    onSubmit(recordData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded">
      <h2 className="text-2xl mb-4">{record ? 'Return Book' : 'Borrow Book'}</h2>
      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        className="block w-full p-3 mb-4 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Book Title"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
        className="block w-full p-3 mb-4 border border-gray-300 rounded"
        required
      />
      <input
        type="date"
        placeholder="Due Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="block w-full p-3 mb-4 border border-gray-300 rounded"
        required
      />
      {record && (
        <input
          type="date"
          placeholder="Returned On"
          value={returnedOn}
          onChange={(e) => setReturnedOn(e.target.value)}
          className="block w-full p-3 mb-4 border border-gray-300 rounded"
        />
      )}
      <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
        {record ? 'Return Book' : 'Borrow Book'}
      </button>
    </form>
  );
}

export default LibraryForm;
