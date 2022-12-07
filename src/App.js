import { useEffect, useState } from "react";
import { FaTwitter, FaCopy } from "react-icons/fa";

function App() {
  const [quotes, setQuotes] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuotes(randomQuote.quote);
        setAuthor(randomQuote.author);

        console.log(randomQuote.quote);
        console.log(randomQuote.author);
      });
  };

  const handleClick = () => {
    getQuote();
  };

  return (
    <div className="App h-[100vh] flex items-center justify-center">
      <div className="container mt-12 border-2 w-[700px] h-[250px] rounded shadow-md">
        <h2 className="quotes text-left px-6 py-4">{quotes}</h2>
        <div id="author" className="px-6 py-1 ml-[500px]">
          {author}
        </div>
        <div className="btn flex items-center justify-center gap-[440px] mt-[50px]">
          <div className="icons flex items-center justify-center gap-[20px]">
            {/* <FaTwitter className="text-[30px]" />
            <FaCopy className="text-[30px]" /> */}
          </div>
          <button
            className="random-btn text-[#fff] bg-[#1E293B] px-2 py-2 rounded"
            onClick={handleClick}
          >
            Next Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
