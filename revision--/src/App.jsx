import React from 'react'
import About from './components/About'
import Home from './components/Home'
const App = () => {
  return (
    <div>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
    </div>
  )
}

export default App