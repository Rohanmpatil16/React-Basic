import { useState } from "react";

function App()
{
  
  const [a,setA] = useState(1);

 
  return (

    <div>
      
      <h1>Count: {a}</h1>
     
      <button onClick={()=>setA(a+1)}>Increment</button>
      <button onClick={()=>setA(a-1)}>Decrement</button>
      <button onClick={()=>setA(0)}>Reset</button>
      
    </div>
  );
}

export default App;