// import logo from './logo.svg';
import Button from './components/Button';
import { useState } from 'react';
import './App.css';

// import Button from './components/Button';
import TestComponent from './components/TestComponent';
import NavbarCom from './components/Navbar';
import { Link } from 'react-router';

function App() { 
  const [component, setComponent] = useState(true)
  
  return (

    <div className="App">
      <NavbarCom />
      <div className='d-flex gap-5 border py-5' >
        <Link to={"/about"} >go to about</Link>
        <Link to={"/contact"} >go to contact</Link>
      </div>
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
