import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [userInput, setUserInput] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("I will be called on render and each re-render")
  })

  useEffect(() => {
    console.log("I will be called only once. (only on render)");
  }, [])

  useEffect(() => {
    console.log("I will be called on render and each time toggle (state variable) is changed")
  }, [toggle])

  return (
    <div className="App">
      <input value={userInput} onChange={event => setUserInput(event.target.value)} />
      <button onClick={_ => setToggle(!toggle)}>Toggle State</button>  
    </div>
  );
}

export default App;
