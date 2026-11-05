import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div className="w-full h-screen duration-150" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-white bg-red-600"
            onClick={() => changeColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-white bg-blue-700"
            onClick={() => changeColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-white bg-green-700"
            onClick={() => changeColor("green")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-white bg-black"
            onClick={() => changeColor("white")}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
