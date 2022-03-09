import "./App.css";
import { getQuotes } from "./api";
import React from "react";

function App() {
  const [quotes, setQuotes] = React.useState(null);
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    getQuotes().then((data) => {
      setQuotes(data);
    });
  }, [clicked]);

  let tweet = quotes?.data.content.replace(/\s/g, "%20");

  function btnClicked() {
    setClicked(!clicked);
  }

  return (
    <div id="quote-box">
      <h1 id="text">
        <i className="fa-solid fa-quote-left"></i>&nbsp;
        {quotes && quotes.data.content} &nbsp;
        <i className="fa-solid fa-quote-right"></i>
      </h1>
      <p id="author"> - {quotes && quotes.data.originator.name}</p>
      <div id="all-buttons">
        <button id="new-quote" onClick={btnClicked}>
          NEW QUOTE
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text=${tweet}`}
          id="tweet-quote"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
