import './App.css';
import { useState } from 'react';


function App() {

  const [card,setCard]=useState({border: '1px solid #d4cdcd',
    width: '200px',
    boxShadow: '1px 2px 3px 0px #ccc',
    padding: '9px',
    margin:'10px'});
 
    const updateTheme=(bgColor,textColor)=>{
      setCard({...card,backgroundColor:bgColor,color:textColor})
    }
 
    return (
    <div style={card}>

    <h1 style={{color: 'red'}}>Job Card</h1>
  <div>
    <img style={{width:'200px'}}src="https://i.pinimg.com/originals/1d/f9/d4/1df9d49191b554fd08b35bc0164dae98.jpg"alt="img"></img>
      <div style={{cursor: 'default',margin: '4px'}}>
      <button onClick={()=>updateTheme('gray','blue')}>Gray Theme</button>
      <button onClick={()=>updateTheme('white','black')}>Default Theme</button>
      </div>
      <div style={{padding: '5px'}}>
        <h3>Rohini Patil</h3>
        <p>Software Engineer</p>
      </div>
  </div>

      
    </div>
  );
}

export default App;
