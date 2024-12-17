import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  AssignmentsContainer,
  SidebarContainer,
  Content,
  AssignmentCard,
  AssignmentTitle,
  AssignmentDescription,
  AssignmentButton,
  AssignmentDoneMessage,
} from '../../styles/AssignmentStyles';

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/v1/assignments/getall');
      setAssignments(response.data.assignments);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDoAssignment = async (id, opinion) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/v1/assignments/${id}/submit`, { opinion, done: true });
      if (response.status === 200) {
        setAssignments((prevAssignments) =>
          prevAssignments.map((assignment) =>
            assignment.id === id ? { ...assignment, done: true } : assignment
          )
        );
      }
    } catch (error) {
      console.error('Error submitting assignment:', error);
    }
  };

  return (
    <AssignmentsContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <h1>Assignments</h1>
        {loading ? (
          <p>Loading assignments...</p>
        ) : (
          assignments.map((assignment) => (
            <AssignmentCard key={assignment.id}>
              <AssignmentTitle>{assignment.title}</AssignmentTitle>
              <AssignmentDescription>{assignment.description}</AssignmentDescription>
              {!assignment.done ? (
                <AssignmentForm onDoAssignment={(opinion) => handleDoAssignment(assignment.id, opinion)} />
              ) : (
                <AssignmentDoneMessage>Assignment Done</AssignmentDoneMessage>
              )}
            </AssignmentCard>
          ))
        )}
      </Content>
    </AssignmentsContainer>
  );
};

const AssignmentForm = ({ onDoAssignment }) => {
  const [opinion, setOpinion] = useState('');

  const handleInputChange = (event) => {
    setOpinion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (opinion.trim() !== '') {
      onDoAssignment(opinion);
    } else {
      alert('Please provide your opinion/assignment.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={opinion}
        onChange={handleInputChange}
        placeholder="Enter your opinion/assignment..."
      />
      <AssignmentButton type="submit" disabled={!opinion.trim()}>
        Submit
      </AssignmentButton>
    </form>
  );
};

export default StudentAssignments;
