import { useState } from "react"

const TodoApp = () =>{
  const [textInp, setTextInp] = useState("")
  const [id, setId] = useState(1)
  const [todo, setTodo] = useState([{text : "gym",id : 1}])
  // console.log(todo)

  const addNew = ()=>{
    if(textInp.trim() === "") return;
    setTodo([...todo, { text: textInp, id: id +1}]);
    setId(id + 1);
    setTextInp("")
  }
  

  const deleteTodo = (todoId)=>{

    setTodo(todo.filter((todo)=> todo.id !== todoId))

  }

  return (
    <>
    {
      todo.map((newTodo)=>{
        return(
          <li key={newTodo.id}>{newTodo.text}  <button onClick={()=>{
            deleteTodo(newTodo.id)
          }}>delete</button></li>
        )
      })

    }
    <input type="text" onChange={(e)=>{setTextInp(e.target.value)}} value={textInp} name="" id="textInp" />
    <button onClick={()=>{
      addNew()
    }}>new todo</button>
    
    </>
  )
}

export default TodoApp;

// -------------------------------------------------------------------------------------------------

// import { useState } from "react";

// const TodoApp = () => {
//   const [textInp, setTextInp] = useState("");
//   const [id, setId] = useState(1);
//   const [todo, setTodo] = useState([{ text: "gym", id: 1 }]);

//   const addNew = () => {
//     if (textInp.trim() === "") return; // Prevent adding empty todos
//     setTodo([...todo, { text: textInp, id: id + 1 }]);
//     setId(id + 1);
//     setTextInp(""); // Clear input after adding
//   };
//   console.log(todo)

//   const deleteTodo = (todoId) => {
//     setTodo(todo.filter((todo) => todo.id !== todoId));
//   };

//   return (
//     <>
//       <ul>
//         {todo.map((newTodo) => (
//           <li key={newTodo.id}>
//             {newTodo.text} <button onClick={() => deleteTodo(newTodo.id)}>delete</button>
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         onChange={(e) => setTextInp(e.target.value)}
//         value={textInp}
//         placeholder="Enter a new todo"
//       />
//       <button onClick={addNew}>New Todo</button>
//     </>
//   );
// };

// export default TodoApp;
