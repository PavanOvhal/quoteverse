import { useEffect, useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("");

  const getQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Could not load quote.");
      setAuthor("");
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white px-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl max-w-xl w-full text-center shadow-xl">
        <h1 className="text-3xl font-bold mb-4">📜 QuoteVerse</h1>
        <p className="text-xl italic mb-4">"{quote}"</p>
        {author && <p className="text-md font-semibold mb-6">— {author}</p>}
        <button
          onClick={getQuote}
          className="bg-white text-indigo-600 font-bold px-6 py-2 rounded-full hover:bg-indigo-100 transition"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
