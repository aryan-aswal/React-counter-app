import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0);
  function decrementHandler() {
    setValue(value - 1);
  }
  function incrementHandler() {
    setValue(value + 1);
  }
  function resetHanlder() {
    setValue(0);
  }
  return (
    <div className='wrapper'>
      <h1>Increment And Decrement</h1>
      <div className='display-container'>
        <button className="btn" onClick={decrementHandler}>-</button>
        <span>{value}</span>
        <button className="btn" onClick={incrementHandler}>+</button>
      </div>
      <button className='reset-button' onClick={resetHanlder}>Reset</button>
    </div>
  )
}

export default App
