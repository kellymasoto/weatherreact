import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <Weather />
        <br />
        <footer>
          Coded by{" "}
          <a href="https://github.com/MLZ6" target="_blank" rel="noreferrer">
            Maitumelo Moaletsi
          </a>{" "}
          is{" "}
          <a
            href="https://github.com/MLZ6/my-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://monumental-dasik-fdb48b.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;
