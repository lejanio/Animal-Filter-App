import { configureStore } from '@reduxjs/toolkit';
import { reducer as animalReducer } from './reducers/animalSlice';
import { reducer as languageReducer } from './reducers/languageSlice';
import { reducer as modalReducer } from './reducers/modalSlice';
import { reducer as filterSpeciesReducer } from './reducers/filterSlice';

const store = configureStore({
  reducer: {
    animals: animalReducer,
    language: languageReducer,
    modal: modalReducer,
    filterSpecies: filterSpeciesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
