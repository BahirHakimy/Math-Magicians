import React from 'react';
import getQuote from '../api/quotes';

function Quote() {
  const [quote, setQuote] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    getQuote()
      .then((quote) => {
        setQuote(quote);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch the quote, please try again');
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        backdropFilter: 'blur(5px)',
        animation: 'appear 0.5s ease-in 1 forwards',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'cursive',
            color: error ? 'orangered' : '#fff',
            filter: 'drop-shadow(0.2rem 0.2rem 0.3rem #77c)',
            textShadow: ' 0.1rem 0.1rem 0.1rem black',
            padding: '1rem 2rem',
            textAlign: 'center',
          }}
        >
          {error || (loading ? 'Loading...' : quote[0]?.quote)}
        </h1>
        <cite
          style={{
            padding: '1rem',
            marginTop: '1rem',
            color: ' #00a1ff',
            filter: 'drop-shadow(0.2rem 0.2rem 0.3rem #000)',
            textShadow: '0.1rem 0.1rem 0.5rem #333',
          }}
        >
          {!loading && !error ? quote[0]?.author : ''}
        </cite>
      </div>
    </div>
  );
}

export default Quote;
