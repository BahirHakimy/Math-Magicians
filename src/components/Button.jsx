import React from 'react';

function Button({
  text = 'H',
  background = 'whitesmoke',
  onClick = () => {},
  styles = {},
}) {
  return (
    <button
      onClick={() => onClick(text)}
      style={{
        width: '100%',
        height: '100%',
        background: background,
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
