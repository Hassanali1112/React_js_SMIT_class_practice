import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function someExpensiveCalcuFunc(num) {
    for (let i = 0; i < 100000000; i++) {}
    // console.log("sum function")
    return num * 2;
  }

  // const dataFunc = someExpensiveCalcuFunc(3);
  const dataFunc = useMemo(() => someExpensiveCalcuFunc(3), [input]);
  // console.log(dataFunc)

  return (
    <>
      <div className="card">
        <h3>count is {count}</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name=""
          id=""
        />
        <button onClick={() => setCount((prev) => prev + 1)}>
          increment in count
        </button>
      </div>
    </>
  );
}

export default App;
