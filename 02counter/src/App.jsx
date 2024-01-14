import { useState } from 'react'


function App() {

const [counter, setCounter] = useState(14)

const addValue = () => {
    setCounter((addMore => addMore + 1) )
    setCounter((addMore => addMore + 1) )
}

const removeValue = () => {
  setCounter(counter -1)
}   


  return (
    <>
      <h1>react continued {counter}</h1>
      <h2>counter value {counter}</h2>
      <button
      onClick={addValue}
      >add value</button> {" "}
      <button
      onClick={removeValue}
      >remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
