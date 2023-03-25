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
            color: error ? 'orangered' : 'gray',
            padding: '1rem 2rem',
            textAlign: 'center',
          }}
        >
          {error || (loading ? 'Loading...' : quote[0]?.quote)}
        </h1>
        <cite style={{ padding: '1rem', marginTop: '1rem' }}>
          {!loading && !error ? quote[0]?.author : ''}
        </cite>
      </div>
    </div>
  );
}

export default Quote;
