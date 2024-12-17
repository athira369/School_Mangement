import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudent(state, action) {
      state.students.push(action.payload);
    },
    updateStudent(state, action) {
      const index = state.students.findIndex((student) => student.id === action.payload.id);
      if (index !== -1) {
        state.students[index] = { ...state.students[index], ...action.payload };
      }
    },
    deleteStudent(state, action) {
      state.students = state.students.filter((student) => student.id !== action.payload);
    },
    setStudents(state, action) {
      state.students = action.payload;
    },
  },
});

export const { addStudent, updateStudent, deleteStudent, setStudents } = studentSlice.actions;

export default studentSlice.reducer;
