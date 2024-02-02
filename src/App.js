import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <h1> Weather App </h1>
      <Weather />

      <p>
        This page was coded by Thomas Jennifer and it is open sourced on{" "}
        <a href="https://github.com/ogechi3/weather-react">github</a>{" "}
      </p>
    </div>
  );
}
