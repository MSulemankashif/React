import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterExample from './Components/CounterExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterExample />
    </>
  )
}

export default App
