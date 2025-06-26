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
      { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
      { text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.", author: "Albus Dumbledore (J.K. Rowling)" },
      { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
      { text: "In the end, we only regret the chances we didn’t take.", author: "Lewis Carroll" },
      { text: "You don't find love, it finds you. It's got a little bit to do with destiny, fate, and what's written in the stars.", author: "Anaïs Nin" },
      { text: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
      { text: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.", author: "Angelita Lim" },
      { text: "Sometimes the heart sees what is invisible to the eye.", author: "H. Jackson Brown, Jr." },
      { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
      { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
      { text: "When we are in love, we seem to ourselves quite different from what we were before.", author: "Blaise Pascal" },
      { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
      { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
      { text: "Sometimes, the smallest things take up the most room in your heart.", author: "A.A. Milne (Winnie the Pooh)" }


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
