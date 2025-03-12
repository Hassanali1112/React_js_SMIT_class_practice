// import logo from './logo.svg';
import Button from './components/Button';
import { useState } from 'react';
import './App.css';

// import Button from './components/Button';
import TestComponent from './components/TestComponent';

function App() { 
  const [component, setComponent] = useState(true)
  
  return (
    <div className="App">
      <br />
      <br />
      <br />
      {component ? <TestComponent /> : "click toggle to show component"}
      <br />
      <br />
      <br />
      <Button text={"Toggle Component"} func={()=>{
        setComponent(!component)
      }}/>
    </div>
  );
}

export default App;
