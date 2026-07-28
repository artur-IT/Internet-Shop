import { useState } from 'react'
import './App.css'

function App() {
  const [showExpress, setShowExpress] = useState('')
fetch('http://localhost:3001/api/health')
  .then(data => data.text())
  .then(data => setShowExpress(data))
  .catch(err => setShowExpress(err.message));

  return (
    <section id="center">
      <div>
        <h1>Get started Vite + React</h1>
      </div>
      {showExpress && <p>{showExpress}</p>}
    </section>
  )
}

export default App
