import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CyberSecurityLanding from './components/Landing page/CyberSecurityLanding'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CyberSecurityLanding />
    </>
  )
}

export default App
