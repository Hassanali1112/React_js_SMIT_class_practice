// import { useMemo, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const [input,setInput]= useState(0)



//   function someExpensiveCalcuFunc(num){
    
//     for(let i=0; i < 100000; i++){}
//     // console.log("sum function")
//     return num *2
//   } 

//   const dataFunc = someExpensiveCalcuFunc(3);
//   // const dataFunc = useMemo(() => someExpensiveCalcuFunc(3), [input]);
//   // console.log(dataFunc)


//   return (
//     <>
//       <div className="card">
//         <h3>count is {count}</h3>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           name=""
//           id=""
//         />
//         <button onClick={() => setCount((prev) => prev + 1)}>increment in count</button>
//       </div>
//     </>
//   );
// }

// export default App


// import React, { useCallback, useState } from 'react'
// import TestComp from './TestComp';

// const App = () => {

//   const [count, setCount] = useState(0);

//   const updateCount = useCallback(()=>setCount((prev)=> prev + 1),[])



//   return (
//     <>
//     <h3>the count is {count}</h3>
//     <button onClick={updateCount} >Increment the count</button>
//     <br /><br />
//     <TestComp updateCount={updateCount} text={"Test Compoent"}/>
    
//     </>
//   )
// }

// export default App

import React, { useRef, useState } from 'react'
import TestComp from './TestComp'

const App = () => {
  

  const playFunc = ()=>{
    buttonRef.current.style.backgroundColor = "yellow";
    buttonRef.current.style.color = "blue";
    // console.log()
  }

  const buttonRef = useRef()
  return (
    <>
      <button ref={buttonRef}>Click Me</button>
    <br /><br />
      <TestComp updateCount={playFunc} text={"Ref Test Component"} />
    </>
  );
}

export default App