import { useState } from "react";

function App()
{
  
  const [a,setA] = useState("rohan");

  let change=()=>{
    setA("rohit");
  }
  return (

    <div>
      
      <h1>Hello, World! {a}</h1>
     
      <button onClick={change}>click me</button>
      
    </div>
  );
}

export default App;