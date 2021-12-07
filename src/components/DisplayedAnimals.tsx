import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import logo from '../assets/animal-logo.png';
import AnimalCard from './AnimalCard';
import { addAnimal } from '../state/reducers/animalSlice';
import './DisplayedAnimals.scss';

const DisplayedAnimals = () => {
  const animals = useAppSelector((reduxState) => reduxState.animals);
  const language = useAppSelector((reduxState) => reduxState.language);
  const filterValue = useAppSelector((reduxState) => reduxState.filterSpecies);

  const filteredAnimals = animals.filter((item) => item.species === filterValue);

  return (
    <div>
      <div className="animal-card-container">
        {(filteredAnimals.length !== 0
          ? (filteredAnimals)
          : (animals))
          .map((item) => (
            <div
              key={uuidv4()}
            >
              <AnimalCard
                animalNameProp={item.name[language]}
                animalImageProp={item.imgSrc}
                animalSpeciesProp={item.species}
              />
            </div>
          ))}
      </div>
    </div>

  );
};

export default DisplayedAnimals;
