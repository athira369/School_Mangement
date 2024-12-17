import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AssignmentsContainer,
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AddAssignmentButton,
} from '../../styles/AssignmentStyles';

const Assignment = () => {
  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', grade: '', deadline: '' });
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/assignments/getall');
      setAssignments(response.data?.assignments || []); // Ensure it's always an array
    } catch (error) {
      console.error('Error fetching assignments:', error);
      setAssignments([]); // Handle API errors gracefully
    }
  };

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    if (Object.values(newAssignment).every((field) => field.trim() !== '')) {
      try {
        const response = await axios.post('http://localhost:5000/api/v1/assignments', newAssignment);
        toast.success('Assignment added successfully');
        setAssignments([...assignments, response.data.assignment]);
        setNewAssignment({ title: '', description: '', grade: '', deadline: '' });
      } catch (error) {
        console.error('Error adding assignment:', error);
        toast.error('Error adding assignment');
      }
    }
  };

  return (
    <AssignmentsContainer>
      <ToastContainer />
      <Sidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm onSubmit={handleAddAssignment}>
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment title"
              value={newAssignment.title}
              onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
            />
            <AddAssignmentTextArea
              placeholder="Enter assignment description"
              value={newAssignment.description}
              onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment grade"
              value={newAssignment.grade}
              onChange={(e) => setNewAssignment({ ...newAssignment, grade: e.target.value })}
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment deadline"
              value={newAssignment.deadline}
              onChange={(e) => setNewAssignment({ ...newAssignment, deadline: e.target.value })}
            />
            <AddAssignmentButton type="submit">Add Assignment</AddAssignmentButton>
          </AddAssignmentForm>
          <AssignmentList>
            {assignments?.length > 0 ? (
              assignments.map((assignment, index) => (
                <AssignmentItem key={assignment.id || index}>
                  <strong>{assignment?.title || "Untitled"}: </strong>
                  {assignment?.description || "No description"}, {assignment?.grade || "N/A"}, {assignment?.deadline || "No deadline"}
                </AssignmentItem>
              ))
            ) : (
              <p>No assignments available</p>
            )}
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
};

export default Assignment;
