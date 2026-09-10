import { useEffect, useState } from "react";

  async function getQuote() {
    const response = await fetch(
      "https://motivational-spark-api.vercel.app/api/quotes/random"
    );

    const data = await response.json();

    console.log(data); // see what the API gives you
    setQuote(data);
  }

import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/")
            .then(res => res.json())
            .then(data => {
                setMessage(data.message);
            });

        getQuote();

    return (
        <div>
        <div>
            <h1>Frontend</h1>
            <p>{message}</p>
        </div>
        <div>
              <h1>Random Quote</h1>

              {quote && (
                <div>
                  <p>{quote.quote}</p>
                  <p>— {quote.author}</p>
                </div>
              )}

              <button onClick={getQuote}>
                New Quote
              </button>
            </div>
        </div>
    );
}
}
export default App;
