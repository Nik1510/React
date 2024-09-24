import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Componets/Login'
import Profile from './Componets/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1 > React says Hello World  </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
