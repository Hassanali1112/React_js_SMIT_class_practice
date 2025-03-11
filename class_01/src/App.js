// import logo from './logo.svg';
import './App.css';
import TodoApp from './components/TodoApp';
// import Button from './components/Button';
// import Img from './components/Img';

function App() {

  // const primAlert = () =>{
  //   alert("this is primary button")
  // }

  // const secAlert = () =>{
  //   alert("this is secondary button")
  // }
  return (
    <div className="App">
     {/* <Button text="Primary Text" alert={primAlert}/>
     <Img imgSrc="../Images/1 (1).jpeg" />
     <Button text="secondary Text" alert={secAlert}/> */}
     <TodoApp />
    </div>
  );
}

export default App;
