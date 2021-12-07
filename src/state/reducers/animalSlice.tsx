import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AnimalState = {
  name: {
    [key: string]: string,
  },
  species: string,
  imgSrc: string,
}

const getAnimalList = () => {
  const animalList = localStorage.getItem('animals');
  if (animalList) {
    return JSON.parse(animalList) || [];
  }
  return [];
};

// const animals: AnimalState[] = JSON.parse(localStorage.getItem('animals') as string);

const initialState = getAnimalList() as AnimalState[];

export const animalSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
    addAnimal: (state, action:PayloadAction<AnimalState>) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { reducer, name } = animalSlice;

export const { addAnimal } = animalSlice.actions;
