import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css'

import { Link } from "react-router";

function App() {
  return (
    <>
      <h1>hello world</h1>
      <Link to={"/products"}> go to products </Link>
    </>
  );
}

export default App;
