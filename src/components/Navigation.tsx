import React from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import './Navigation.scss';
import { setFilterValue } from '../state/reducers/filterSlice';

const Navigation = () => {
  const animalSpecies = useAppSelector((reduxState) => {
    const animalSpeciesSort = reduxState.animals.map((item) => (item.species));
    return [...new Set(animalSpeciesSort)];
  });
  const filterValue = useAppSelector((reduxState) => reduxState.filterSpecies);

  const dispatch = useAppDispatch();

  return (

    <div className="navigation--container">
      {animalSpecies.length > 0
      && (
      <div
        className="navigation-item"
        onClick={() => {
          dispatch(setFilterValue(''));
        }}
      >
        All
      </div>
      )}
      {animalSpecies.map((item) => (
        <div
          className="navigation-item"
          onClick={() => {
            dispatch(setFilterValue(item));
            console.log('filterValue', filterValue);
          }}
        >
          {item[0].toUpperCase() + item.slice(1)}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
