import React from 'react';
import styles from 'styles/Calculator.module.css';

function Button({ text, onClick, stylesOverride = {} }) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => onClick(text)}
      style={{
        ...stylesOverride,
      }}
    >
      {text}
    </button>
  );
}

export default Button;
