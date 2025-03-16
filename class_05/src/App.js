import "./App.css";

import { useContext } from "react";
import { Context } from "./Context/context";

function App() {
  const { count, updateCount,name, updateName } = useContext(Context);
  console.log(updateCount);

  return (
    <>
      <h1>The current count is : {count}</h1>
      <button onClick={updateCount}> update count</button>
      <br />
      <br />
      <br />

      <h1>The name is : {name}</h1>
      <button onClick={updateName}> update name</button>
    </>
  );
}

export default App;
