import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'animals',
  initialState: 'en',
  reducers: {
    changeLanguage: (state, action:PayloadAction<string>) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reducer, name } = languageSlice;

export const { changeLanguage } = languageSlice.actions;
