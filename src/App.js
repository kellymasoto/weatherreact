import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Gaborone" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/kellymasoto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kelly Masoto
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kellymasoto/weatherreact"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://maskel.netlify.app/?"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
