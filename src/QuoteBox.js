import React, { useState, useEffect } from 'react';

function QuoteBox() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

    // Function to fetch a random quote from the API
    // This function will be called when the component mounts and when the button is clicked
  const getQuote = async () => {
    try {
        //I use the API from alexendra she posted in the slack   random channel
        // I use the fetch method 
      const res = await fetch('https://quoteslate.vercel.app/api/quotes/random');
      const data = await res.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (err) {
      setQuote('Oops! fetch not working plaese, try again.');
      setAuthor('');
    }
  };

    // Fetch a quote when the component mounts

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="quote-container">
      <p className="quote">"{quote}"</p>
      <p className="author"><strong>{author}</strong></p>
      <button onClick={getQuote} className="btn">New Quote</button>
    </div>
  );
}

export default QuoteBox;
