import logo from "./logo.svg";
import "./App.css";
import Youtube from "./Youtube";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to the world of REACTJS</h1>
        <h2> The world is better with REACTJS</h2>
        <h3> I love Coding with REACTJS</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <Youtube />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
