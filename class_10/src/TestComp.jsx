import React from "react";


const TestComp = React.memo(({updateCount, text})=>{
  
  console.log("Test Component")
 
  return(
    <>
        <button onClick={updateCount}>{text}</button>

    </>
  )
})

export default TestComp;

// import React from 'react'

// const TestComp = ({updateCount, text}) => {
//    console.log("Test Component");
//   return (
//     <button onClick={updateCount}>{text}</button>
//   )
// }

// export default TestComp