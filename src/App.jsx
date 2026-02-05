import { useState } from 'react'
import './App.css'
import CyberSecurityLanding from './components/Landing-page/CyberSecurityLanding'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CyberSecurityLanding />
    </>
  )
}

export default App
