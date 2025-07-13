import { useState, useEffect } from "react";

export default function Home() {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("");

  const getQuote = async () => {
    try {
      const res = await fetch("https://quote-api-y7ug.onrender.com/api/quotes/random");
      const data = await res.json();
      setQuote(data.text);
      setAuthor(data.author);
    } catch (err) {
      setQuote("Failed to fetch quote.");
      setAuthor("");
      console.error(err);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="container">
      <div className="quote-box">
        <h1>QuoteVerse</h1>
        <p className="description">Quote Generator Developed by Pavan Ovhal</p>
        <p className="quote">"{quote}"</p>
        <p className="author">— {author}</p>
        <button onClick={getQuote} className="button">
          New Quote
        </button>
      </div>
    </div>
  );
}
