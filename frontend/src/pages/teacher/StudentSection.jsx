// StudentSection.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { 
  StudentsContainer, 
  Content, 
  StudentsContent, 
  SidebarContainer,
  StudentsHeader, 
  StudentList, 
  StudentItem, 
  AddStudentForm, 
  AddStudentInput, 
  AddStudentButton } 
  from '../../styles/StudentStyles';

const StudentSection = () => {
  const [newStudent, setNewStudent] = useState({ name: '', registrationNumber: '', grade: '' });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/students/getall');
      setStudents(response.data.students);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  return (
    <StudentsContainer>
       <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <StudentsContent>
          <StudentsHeader>Students</StudentsHeader>
          <StudentList>
            {students.map((student) => (
              <StudentItem key={student.id}>{student.name} - {student.registrationNumber} - {student.grade}</StudentItem>
            ))}
          </StudentList>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
};

export default StudentSection;