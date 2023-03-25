/* eslint-disable react/prop-types */
import React from 'react';

function Button({
  text = 'H',
  background = 'whitesmoke',
  onClick = () => {},
  styles = {},
}) {
  return (
    <button
      type="button"
      onClick={() => onClick(text)}
      style={{
        width: '100%',
        height: '100%',
        background,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        ...styles,
      }}
    >
      {text}
    </button>
  );
}

export default Button;
