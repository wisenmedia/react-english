// import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  /// const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-3xl bg-green-500 p-3 rounded-md">
          Vite with Tailwindcss{" "}
        </h1>
      </div>
      <Card />
      <Card />
    </>
  );
}

export default App;
