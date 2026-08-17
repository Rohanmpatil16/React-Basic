import React from 'react'

function Stud(props)
{
  return(
    <h1>Name:{props.name}</h1>
  )
}
function App() {
  return (
    <div>
      <Stud name="Rohan"></Stud>
    </div>
  )
}

export default App