import React, { FC } from 'react';
import './AnimalCard.scss';

type AnimalCardProps = {
    animalNameProp: string,
    animalImageProp: string,
    animalSpeciesProp: string,

}

const AnimalCard:FC<AnimalCardProps> = ({ animalNameProp, animalImageProp, animalSpeciesProp }) => (
  <div className="animal-card">
    <div className="animal-card--item">
      Name:
      {' '}
      {animalNameProp}
    </div>
    <div>
      <img src={animalImageProp} alt={animalNameProp} height="200px" style={{ borderRadius: '5px' }} />
    </div>
    <div className="animal-card--item">
      Species:
      {' '}
      {animalSpeciesProp}
    </div>
  </div>
);

export default AnimalCard;
