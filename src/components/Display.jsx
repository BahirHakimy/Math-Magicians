import React from 'react';

// eslint-disable-next-line react/prop-types
function Display({ text = '0', styles = {} }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        background: '#858694',
        color: 'white',
        padding: '.5rem',
        fontSize: '3rem',
        ...styles,
      }}
    >
      {text}
    </div>
  );
}

export default Display;
