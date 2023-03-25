import React from 'react';
import PropTypes from 'prop-types';

function Display({ text = '0', styles }) {
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

Display.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.objectOf(PropTypes.object()),
};

Display.defaultProps = {
  text: '0',
  styles: {},
};

export default Display;
