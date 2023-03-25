import React from 'react';
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
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'grid',
        gridTemplateRows: 'repeat(6,1fr)',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '.2rem',
        padding: '.2rem',
        background: '#ccc',
      }}
    >
      <Display
        styles={{ gridColumn: '1/5' }}
        text={`${total || ''} ${operation || ''} ${next || ''}`}
      />
      {buttons.map((text) => (
        <Button
          key={text}
          text={text}
          styles={{
            gridColumn: text === '0' ? 'span 2' : 'span 1',
            background: opreators.includes(text) ? '#f5913e' : 'whitesmoke',
          }}
          onClick={() => setResult(calculate(result, text))}
        />
      ))}
    </div>
  );
}

export default Calculator;
