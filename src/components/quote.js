import React, { useEffect, useState } from 'react';
import '../scss/calculator.scss';
import get from '../utils/fetchData';

function Quote() {
  const [quote, setQuote] = useState({
    quote: '',
    author: '',
    category: '',
  });

  useEffect(() => {
    const result = async () => {
      const getQuote = await get();
      setQuote(...getQuote);
    };
    result();
  }, [setQuote]);

  return (
    <div className="quote-div">
      <h2 className="title-quote">Quote:</h2>
      <p className="quote">
        {quote.quote}
        {' '}
        -
        {' '}
        {quote.author}
      </p>
    </div>
  );
}

export default Quote;
