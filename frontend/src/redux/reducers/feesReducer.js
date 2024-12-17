import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  feesRecords: [],
};

const feesSlice = createSlice({
  name: 'fees',
  initialState,
  reducers: {
    addFeesRecord(state, action) {
      state.feesRecords.push(action.payload);
    },
    updateFeesRecord(state, action) {
      const index = state.feesRecords.findIndex((record) => record.id === action.payload.id);
      if (index !== -1) {
        state.feesRecords[index] = { ...state.feesRecords[index], ...action.payload };
      }
    },
    deleteFeesRecord(state, action) {
      state.feesRecords = state.feesRecords.filter((record) => record.id !== action.payload);
    },
    setFeesRecords(state, action) {
      state.feesRecords = action.payload;
    },
  },
});

export const { addFeesRecord, updateFeesRecord, deleteFeesRecord, setFeesRecords } = feesSlice.actions;

export default feesSlice.reducer;
