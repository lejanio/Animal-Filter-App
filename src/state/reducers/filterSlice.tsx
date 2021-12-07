import { createSlice } from '@reduxjs/toolkit';

export const filterSpeciesSlice = createSlice({
  name: 'filterSpecies',
  initialState: '',
  reducers: {
    setFilterValue: (state, action) => (action.payload),
  },
});

export const { reducer } = filterSpeciesSlice;
export const { setFilterValue } = filterSpeciesSlice.actions;
