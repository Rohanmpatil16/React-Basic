import React from 'react'
import About from './components/About'
import Home from './components/Home'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  )
}

export default App