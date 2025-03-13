// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import Button from './Button';

function TestComponent() {  
  const [cities,setCities] = useState([])
  const [city,setCity] = useState('')
 
  const addCity = () =>{
     if (city.trim() !== "") {
       setCities([...cities, city]);
       setCity("");
       console.log(cities)
     }
     }

     useEffect(()=>{
      console.log("hello from useEffect of component mounting")
     },[])

     useEffect(()=>{
      console.log("hello from useEffect of change in cities")
     },[cities])


  useEffect(()=>{
    console.log("hello from useEffect of every change")
  })
  useEffect(()=>{
    
    return (()=>{
      console.log("hello from cleaner useEffect render when a component unmount!");
    })
  })

  useEffect(()=>{

  })
  return (


    <div className="App">

    {
      cities.map((city,index)=>{
        return (
          <li key={index}>{city}</li>
        )
      })
    }
      <br />
      <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
      <Button text={"Add City"} func={addCity} />


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
    </div>
  );
}

export default TestComponent;
