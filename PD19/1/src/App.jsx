import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
        <button onClick={() => setCount((count) => count + 1)}>
          skaicius {count}
        </button>      
  )
}

export default App
