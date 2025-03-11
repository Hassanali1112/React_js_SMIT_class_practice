import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "./Components/Button";
import User from "./Components/User";

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const [todoId, setTodoId] = useState(0);
  const [text,setText] = useState("Title")

  const addTodo = () => {
    if(inputText !== ''){
      setTodo([...todo, { id: todoId, text: inputText }]);
      setInputText("");
      setTodoId(todoId + 1);
    } else {
      console.log("input is empty")
    }
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const changeText = () =>{
    setText("Saylani Mass IT Trainning")
  }


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}

      {/* <h1>{text}</h1>

      <br />
      <br />
      {todo.map((item, index) => {
        return (
          <li key={item.id}>
            {item.text} 
            <button
              onClick={(e) => {
                deleteTodo(item.id);
              }}
            >
              delete
            </button>
          </li>
        );
      })}
      <br />
      <br />

      <input
        type="text"
        onChange={(e) => {
          setInputText(e.target.value);
          // console.log(inputText)
        }}
      />
      {/* <button onClick={addTodo}>add todo</button> */}
      {/* <Button text={"add todo"} func={addTodo} />
      <br />
      <br />
      <br />
      <Button text={"change title"} func={changeText} />  */}

      <User name={"Hassan Ali"} email={"dev.hassan@gmail.com" }/>
    </div>


  );
}

export default App;
