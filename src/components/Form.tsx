import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { addAnimal, AnimalState } from '../state/reducers/animalSlice';
import './Form.scss';
import Button from './Button';
import { changeModalVisibility } from '../state/reducers/modalSlice';

const Form = () => {
  const animals = useAppSelector((reduxState) => reduxState.animals);
  const language = useAppSelector((reduxState) => reduxState.language);
  const animalSpecies = useAppSelector((reduxState) => {
    const animalSpeciesSort = reduxState.animals.map((item) => (item.species));
    return [...new Set(animalSpeciesSort)];
  });
  const initialFormState = {
    name: {
      [language]: '',
    },
    imgSrc: '',
    species: '',
  };

  const [speciesSelectVisible, setSpeciesSelectVisible] = useState(false);
  const [formAnimal, setFormAnimal] = useState(initialFormState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem('animals', JSON.stringify(animals));
  }, [animals]);

  const addAnimalHandler = () => {
    if (!formAnimal.name[language] || !formAnimal.imgSrc || !formAnimal.species) {
      alert('Please fill in all the form fields');
    } else {
      console.log('formAnimal1', formAnimal);
      dispatch(addAnimal({ name: formAnimal.name, species: formAnimal.species, imgSrc: formAnimal.imgSrc }));
      setFormAnimal(initialFormState);
      dispatch(changeModalVisibility(false));
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => { e.preventDefault(); }}
        className="form--container"
      >
        <label htmlFor="name">
          Name:
          {' '}
          <input
            type="text"
            placeholder="Animal name"
            id="name"
            value={formAnimal.name.en}
            onChange={(e) => {
              setFormAnimal({
                ...formAnimal,
                name: {
                  [language]: e.target.value,
                },
              });
            }}
          />
          {/*  const [formAnimal, setFormAnimal] = useState({ */}
          {/*  name: { */}
          {/*  [language]: '', */}
          {/* }, */}
          {/*  imgSrc: '', */}
          {/*  species: '', */}
          {/* }); */}

        </label>
        <label htmlFor="imageSrc">
          Image source:
          {' '}
          <input
            type="text"
            placeholder="Animal image"
            id="imageSrc"
            value={formAnimal.imgSrc}
            onChange={(e) => setFormAnimal({ ...formAnimal, imgSrc: e.target.value })}
          />
        </label>
        <Button
          onClick={() => { setSpeciesSelectVisible(!speciesSelectVisible); }}
        >
          {speciesSelectVisible
            ? ('Select species')
            : ('Add species')}
        </Button>
        {speciesSelectVisible
          ? (
            <label htmlFor="species-input">
              Animal species:
              {' '}
              <input
                type="text"
                placeholder="Animal species"
                id="species-input"
                value={formAnimal.species}
                onChange={(e) => setFormAnimal({ ...formAnimal, species: e.target.value })}
              />
            </label>
          )
          : (
            <label htmlFor="species">
              Species (select or add):
              {' '}
              <select
                name="species"
                id="species"
                value={formAnimal.species}
                onChange={(e) => setFormAnimal({ ...formAnimal, species: e.target.value })}
              >
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <option value="" disabled />
                {animalSpecies.map((item) => (
                  <option
                    value={item}
                    key={uuidv4()}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </label>
          )}
        <Button
          onClick={() => {
            addAnimalHandler();
          }}
        >
          Add animal
        </Button>
      </form>
    </div>

  );
};

export default Form;
