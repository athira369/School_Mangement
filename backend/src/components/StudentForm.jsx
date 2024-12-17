import React, { useState } from 'react';

function StudentForm({ onSubmit, student }) {
  const [firstName, setFirstName] = useState(student?.firstName || '');
  const [lastName, setLastName] = useState(student?.lastName || '');
  const [email, setEmail] = useState(student?.email || '');
  const [className, setClassName] = useState(student?.class || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = { firstName, lastName, email, class: className };
    onSubmit(studentData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded">
      <h2 className="text-2xl mb-4">{student ? 'Edit Student' : 'Add Student'}</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="block w-full p-3 mb-4 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="block w-full p-3 mb-4 border border-gray-300 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full p-3 mb-4 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Class"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        className="block w-full p-3 mb-4 border border-gray-300 rounded"
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
        {student ? 'Update Student' : 'Add Student'}
      </button>
    </form>
  );
}

export default StudentForm;
