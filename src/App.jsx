import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Navbar></Navbar>
    <Cart></Cart>
  </div>
  )
}

export default App
