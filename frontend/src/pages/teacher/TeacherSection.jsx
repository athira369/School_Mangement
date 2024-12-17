// TeacherSection.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { TeachersContainer, 
  Content, 
  TeachersContent, 
  TeachersHeader, 
  TeacherList, 
  TeacherItem, 
  AddTeacherForm, 
  AddTeacherInput, 
  AddTeacherButton,
  SidebarContainer 

} from '../../styles/TeacherStyles';

const TeacherSection = () => {
  const [newTeacher, setNewTeacher] = useState({ name: '', email: '', subject: '' });
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/teachers/getall');
      setTeachers(response.data.teachers);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  return (
    <TeachersContainer>
      <SidebarContainer>
             <Sidebar />
           </SidebarContainer>
      <Content>
        <TeachersContent>
          <TeachersHeader>Teachers</TeachersHeader>
          <TeacherList>
            {teachers.map((teacher) => (
              <TeacherItem key={teacher.id}>{teacher.name} - {teacher.email} - {teacher.subject}</TeacherItem>
            ))}
          </TeacherList>
        </TeachersContent>
      </Content>
    </TeachersContainer>
  );
};

export default TeacherSection;