import React from 'react';
import PropTypes from 'prop-types';

function Button({
  text, background = 'whitesmoke', onClick, styles = {},
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

Button.propTypes = {
  text: PropTypes.string,
  background: PropTypes.string,
  onClick: PropTypes.func,
  styles: PropTypes.objectOf(PropTypes.object()),
};

Button.defaultProps = {
  text: 'B',
  styles: {},
  onClick: () => {},
  background: 'whitesmoke',
};

export default Button;
