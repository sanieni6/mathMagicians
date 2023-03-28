import React, { useEffect, useState } from 'react';
import '../scss/calculator.scss';
import get from '../utils/fetchData';
import '../scss/quote.scss';

function Quote() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quote, setQuote] = useState({
    quote: '',
    author: '',
    category: '',
  });

  useEffect(() => {
    const result = async () => {
      try {
        const getQuote = await get();
        setQuote(...getQuote);
        setLoading(false);
      } catch (error) {
        setError(true);
        throw new Error(`Error fetching the data: ${error}`);
      }
    };
    result();
  }, [setQuote]);

  const Print = () => {
    if (error) {
      return (
        <p className="quote">Error Loading the quote, please reload the page</p>
      );
    }
    if (loading) {
      return (
        <p className="quote">loading...</p>
      );
    }
    return (
      <p className="quote">
        {quote.quote}
        {' '}
        -
        {' '}
        {quote.author}
      </p>
    );
  };

  return (
    <div className="quote-div">
      <h2 className="title-quote">Quote:</h2>
      <Print />
    </div>
  );
}

export default Quote;
