import React, { useState } from 'react';
import './App.scss';
import Form from './components/Form';
import DisplayedAnimals from './components/DisplayedAnimals';
import Logo from './components/Logo';
import { useAppDispatch, useAppSelector } from './state/hooks';
import Modal from './components/Modal';
import { changeModalVisibility } from './state/reducers/modalSlice';
import Button from './components/Button';
import Navigation from './components/Navigation';

const App = () => {
  const animals = useAppSelector((reduxState) => reduxState.animals);
  const modalIsOpen = useAppSelector((reduxState) => reduxState.modal);

  const dispatch = useAppDispatch();

  const openFormModalHandler = () => {
    dispatch(changeModalVisibility(true));
  };

  return (
    <div className="App">
      {
        modalIsOpen && (<Modal />)
      }

      <Logo />
      <Navigation />
      {animals.length === 0
        ? (
          <div className="no-animals-message--container">
            <h1>No animals added</h1>
            <Button
              onClick={() => openFormModalHandler()}
            >
              Add animal
            </Button>
          </div>
        )
        : (
          <div className="container">
            <DisplayedAnimals />
            <Button
              onClick={() => openFormModalHandler()}
              style={{ width: '250px', margin: '0 auto' }}
            >
              Add animal
            </Button>
          </div>
        )}

    </div>
  );
};

export default App;
