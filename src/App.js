import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <footer>
        <a href="https://github.com/kellymasoto/weatherreact">Open-sourced</a>on
        Github 💻 <br />
        Hosted on{" "}
        <a href="https://weather-react-page.netlify.app/">Netlify ❇️</a>
      </footer>
    </div>
  );
}

export default App;
