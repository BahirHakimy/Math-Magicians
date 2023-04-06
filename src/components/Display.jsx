import React from 'react';
import styles from 'styles/Calculator.module.css';

function Display({ text = '0' }) {
  return (
    <div data-testid="display" className={styles.display}>
      {text}
    </div>
  );
}

export default Display;
