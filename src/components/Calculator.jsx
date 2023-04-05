import React from 'react';
import styles from 'styles/Calculator.module.css';
import Button from './Button';
import Display from './Display';
import calculate from '../logic/calculate';

function Calculator() {
  const [result, setResult] = React.useState({
    total: 0,
    next: null,
    operation: null,
  });

  const buttons = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];
  const opreators = ['÷', 'x', '-', '+', '='];
  const { next, total, operation } = result;
  return (
    <div className={styles.container}>
      <h2 className={styles.caption}>Lets do some maths</h2>
      <div className={styles.calculator}>
        <Display
          styles={{ gridColumn: '1/5' }}
          text={`${total || ''} ${operation || ''} ${next || ''}`}
        />
        {buttons.map((text) => (
          <Button
            key={text}
            text={text}
            stylesOverride={{
              gridColumn: text === '0' ? 'span 2' : 'span 1',
              background: opreators.includes(text) ? '#f5913e44' : '#fff4',
              borderBottomLeftRadius: '1rem',
            }}
            onClick={() => setResult(calculate(result, text))}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
