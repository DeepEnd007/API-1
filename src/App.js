import "./App.css";
import React, { useState } from "react";

async function App() {
  const [endPoint, setEndPoint] = useState("");
  const [container, setContainer] = useState([]);

  const url = "https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cf2e2f9556msh6dd4412de3ea5d9p196d2fjsn90b263db04f6",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  const onChangeHandler = (e) => {
    setEndPoint(e.target.value);
  };
  return (
    <div className="App">
      <form>
        <input type="text" value={endPoint} onChange={onChangeHandler} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
