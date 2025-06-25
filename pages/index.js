import { useEffect, useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("");

  const getQuote = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const targetUrl = "https://api.quotable.io/random";
      const res = await fetch(proxyUrl + targetUrl);
      const data = await res.json();
      setQuote(data.content);
      setAuthor(data.author || "Unknown");
    } catch (error) {
      console.error("API Error:", error);
      setQuote("Could not load quote.");
      setAuthor("Try again later");
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">QuoteVerse</h1>
        <p className="text-lg italic text-gray-600">"{quote}"</p>
        <p className="mt-4 text-right text-sm text-gray-500">– {author}</p>
        <button
          onClick={getQuote}
          className="mt-6 bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
