import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  const [app, setApp] = React.useState('calculator');

  return (
    <div className="App">
      <ul
        aria-label="navbar"
        style={{
          width: '100%',
          position: 'sticky',
          top: '0',
          height: '10vh',
          backgroundColor: 'cyan',
          listStyleType: 'none',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '.5rem 1rem',
        }}
      >
        <li>
          <button
            type="button"
            style={{
              padding: '.25rem .5rem',
              cursor: 'pointer',
              color: '#fff',
              fontWeight: '400',
              boxShadow: '.1rem .1rem .2rem black',
              margin: '0 .5rem',
              borderRadius: '.5rem',
              background: 'royalblue',
              border: 'none',
            }}
            onClick={() => setApp('calculator')}
          >
            Calculator
          </button>
        </li>
        <li>
          <button
            type="button"
            style={{
              padding: '.25rem .5rem',
              cursor: 'pointer',
              color: '#fff',
              fontWeight: '400',
              boxShadow: '.1rem .1rem .2rem black',
              margin: '0 .5rem',
              borderRadius: '.5rem',
              background: 'royalblue',
              border: 'none',
            }}
            onClick={() => setApp('quote')}
          >
            Quote
          </button>
        </li>
      </ul>
      <div style={{ height: '90vh' }}>
        {app === 'calculator' ? <Calculator /> : <Quote />}
      </div>
    </div>
  );
}

export default App;
