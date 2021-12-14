import './app.css';
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const handleButton = ( ) => {
    //const numero = Math.floor(Math.random() * 10)
    //setCount(numero)
    
    setCount((count) => count + 1);


    setCount((count) => count + 1);
  }

  return (
    <div className="App">
    
        <h1>useState in React</h1>
        
          <button type="button" className="button" 
          onClick={handleButton}
          >
            count is: {count }
          </button>
    
        <p> Dev Alex </p>
      
    </div>
  )
}

export default App
