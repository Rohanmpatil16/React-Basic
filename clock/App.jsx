import { useState } from "react";
import Clock from "./Clock";
function App()
{
const [color,setColor]=useState('green');

  return(
    
    <div>
      <select onChange={(e)=>setColor(e.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
        <option value={"orange"}>Orange</option>
      </select>
       <Clock color={color}/> 
    </div>
  )

}

export default App;
