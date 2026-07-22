import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showExpress, setShowExpress] = useState('')
fetch('http://localhost:3001/api/health')
  .then(data => data.text())
  .then(data => setShowExpress(data))
  .catch(err => setShowExpress(err.message));

  return (
    <section id="center">
      <div>
        <h1>Get started Vite + React</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
        </p>
      </div>
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
{showExpress && <p>{showExpress}</p>}
    </section>
  )
}

export default App
