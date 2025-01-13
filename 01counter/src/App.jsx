import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)  //Hooks use to handle UI 

  const AddValue=()=>{ 
    setCounter(counter+1);
    if(counter+1>10){
      setCounter(counter);
    }
  }

  const RemoveValue=()=>{ 
    setCounter(counter-1);
    if(counter-1<0){
      setCounter(0);
    }
  }

  return (
    <>
      
      <h1>Counter App</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={AddValue}>Add Value</button>
      <br/>
      <button onClick={RemoveValue}>Remove Value</button>
      
    </>
  )
}

export default App
