import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {

  const [name,setName]=useState("");
  return (
    <div>
      <Navbar/>
      <h1>hlo</h1>
      <form onSubmit={(e)=>{
        e.preventDefault();
        console.log(name);
        setName("");
      }}>
      <input type="text" placeholder="Enter your name:" value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
