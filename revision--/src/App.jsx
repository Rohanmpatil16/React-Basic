import { useState } from "react";

function App()
{
  
  const [show,setShow] = useState(true);

 
  return (

    <div>
        <button onClick={()=>setShow(!show)}></button>
      {show ? "Hide" : "Show"}
      
    </div>
  );
}

export default App;