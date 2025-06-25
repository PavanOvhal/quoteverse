import { useState, useEffect } from "react";

export default function Home() {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    const quotes = [
      { text: "You don’t love someone for their looks... but because they sing a song only you can hear.", author: "Oscar Wilde" },
      { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
      { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
      { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
      { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
      { text: "If you are homeless, Just buy a house.", author: "Khushi Chauhan" },
      { text: "Love is not about how many days, months, or years you’ve been together. Love is about how much you love each other every single day.", author: "Unknown" },
      { text: "Do not wait for the perfect moment. Take the moment and make it perfect.", author: "Zoey Sayward" },
      { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
      { text: "Love cures people—both the ones who give it and the ones who receive it.", author: "Karl Menninger" },
      { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" }
    ];
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random].text);
    setAuthor(quotes[random].author);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
<div className="container">
  <div className="quote-box">
    <h1>Quote Generator</h1>
    <p className="description">
      Inspire simplicity through beautiful quotes and peaceful design.
    </p>
    <p className="quote">"{quote}"</p>
    {author && <p className="author">— {author}</p>}
    <button onClick={getQuote} className="button">
      QUOTE
    </button>
  </div>
</div>
  );
}
