import "./App.css";

async function App() {
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
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  return <div className="App"></div>;
}

export default App;
