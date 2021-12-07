import React, { CSSProperties, FC } from 'react';
import './Button.scss';

type ButtonProps = {
    onClick: () => void;
    style?: CSSProperties | undefined;
}

const Button:FC<ButtonProps> = ({ onClick, style, children }) => (
  <button
    onClick={onClick}
    className="button"
    style={style}
  >
    {children}
  </button>
);

export default Button;
