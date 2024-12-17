// EventCalendar.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import {
  EventCalendarContainer,
  SidebarContainer,
  Content,
  CalendarContainer,
  Events,
  Event,
  AddEventForm,
  EventInput,
  AddEventButton,
  ErrorText,
} from '../../styles/EventCalendarStyles';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [newEvent, setNewEvent] = useState('');
  const [error, setError] = useState(null);

  // Function to fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/events/getall');
      setEvents(response.data.events || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Error fetching events');
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Function to add a new event
  const addEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/events', {
        event: newEvent,
      });
      setEvents([...events, response.data.event]);
      setNewEvent('');
    } catch (error) {
      console.error('Error adding event:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Error adding event');
      }
    }
  };

  return (
    <EventCalendarContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <h1>Events & Calendar</h1>
        <div>Current Time: {new Date().toLocaleString()}</div>
        <CalendarContainer>
        <h2>Select a Date:</h2>
          <DatePicker
            selected={selectedDate} // Bind selectedDate state
            onChange={(date) => setSelectedDate(date)} // Update state when a date is picked
            // Display the calendar inline
          />
        </CalendarContainer>
        
        <AddEventForm onSubmit={addEvent}>
  <h2 style={{ marginBottom: '10px' }}>Add New Event</h2>
  <div style={{ marginBottom: '10px' }}>
    <EventInput
      type="text"
      value={newEvent}
      onChange={(e) => setNewEvent(e.target.value)}
      placeholder="Enter Event"
      style={{ width: '100%', padding: '10px' }}
    />
  </div>
  <div>
    <AddEventButton type="submit" style={{ padding: '10px 20px' }}>
      Add Event
    </AddEventButton>
  </div>
</AddEventForm>
        {error && <ErrorText>{error}</ErrorText>}
        <Events>
          <h2>Events</h2>
          {events.map((event, index) => (
            <Event key={index}>{event}</Event>
          ))}
        </Events>
      </Content>
    </EventCalendarContainer>
  );
};

export default EventCalendar;