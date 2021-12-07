import React from 'react';
import './Modal.scss';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { changeModalVisibility } from '../state/reducers/modalSlice';
import Form from './Form';

const Modal = () => {
  const modalIsOpen = useAppSelector((reduxState) => reduxState.modal);
  const dispatch = useAppDispatch();

  return (
    <div
      className={modalIsOpen ? 'modal active' : 'modal'}
      onClick={
        () => dispatch(changeModalVisibility(false))
      }
    >
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <Form />
      </div>
    </div>
  );
};

export default Modal;
