import React from 'react';

const Button = ({ text, variant, onClick }) => {
  return (
    <button
      className={`btn btn-${variant || 'primary'}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
