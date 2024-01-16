
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[name,setName]=useState()
  function handleInput(e){
    setName("Hello "+e.target.value+"!")
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter Your name:</p>
        <input type="text" onChange={handleInput}></input>
        <p>{name}</p>
    </div>
  )
}

export default App
