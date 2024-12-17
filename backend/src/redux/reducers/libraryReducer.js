import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  libraryRecords: [],
};

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addLibraryRecord(state, action) {
      state.libraryRecords.push(action.payload);
    },
    updateLibraryRecord(state, action) {
      const index = state.libraryRecords.findIndex((record) => record.id === action.payload.id);
      if (index !== -1) {
        state.libraryRecords[index] = { ...state.libraryRecords[index], ...action.payload };
      }
    },
    deleteLibraryRecord(state, action) {
      state.libraryRecords = state.libraryRecords.filter((record) => record.id !== action.payload);
    },
    setLibraryRecords(state, action) {
      state.libraryRecords = action.payload;
    },
  },
});

export const { addLibraryRecord, updateLibraryRecord, deleteLibraryRecord, setLibraryRecords } = librarySlice.actions;

export default librarySlice.reducer;
