import React from 'react'
import {useState} from 'react'

const App = () => {

 const [count,setCount]=useState(0);
 const[name,setName]=useState("")
  return (
    <div>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <h1>{name}: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default App