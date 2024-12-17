import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students data from the backend
    axios.get('http://localhost:5000/api/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error("Error fetching students:", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Student List</h2>
      <Link to="/students/add" className="bg-blue-500 text-white p-2 rounded">Add New Student</Link>
      <ul className="mt-4">
        {students.map(student => (
          <li key={student._id} className="mb-2">
            <Link to={`/students/${student._id}`} className="text-blue-500">{student.firstName} {student.lastName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
