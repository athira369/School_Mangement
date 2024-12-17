import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Table';
import StudentForm from '../../components/StudentForm';

function Students() {
  const [students, setStudents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleFormSubmit = (studentData) => {
    if (isEditing) {
      axios.put(`http://localhost:5000/api/students/${selectedStudent._id}`, studentData)
        .then(() => {
          setStudents(prev => prev.map(student => student._id === selectedStudent._id ? { ...student, ...studentData } : student));
          setIsEditing(false);
          setSelectedStudent(null);
        })
        .catch(error => console.error(error));
    } else {
      axios.post('http://localhost:5000/api/students', studentData)
        .then(response => setStudents([...students, response.data]))
        .catch(error => console.error(error));
    }
  };

  const handleEditStudent = (student) => {
    setIsEditing(true);
    setSelectedStudent(student);
  };

  const columns = ['First Name', 'Last Name', 'Email', 'Class', 'Actions'];

  const data = students.map(student => ({
    ...student,
    actions: (
      <button onClick={() => handleEditStudent(student)} className="text-blue-600 hover:underline">
        Edit
      </button>
    ),
  }));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Students</h1>
      <StudentForm onSubmit={handleFormSubmit} student={selectedStudent} />
      <Table columns={columns} data={data} />
    </div>
  );
}

export default Students;
