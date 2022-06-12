import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterValue(_, { payload }) {
      return payload;
    },
  },
});

export default filterSlice.reducer;
export const { setFilterValue } = filterSlice.actions;
