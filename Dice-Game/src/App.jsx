import styled from "styled-components"
import { StartGame } from "./components/StartGame"
import { GamePlay } from "./components/GamePlay"
import { useState } from "react"

function App() {

  const[startGame,setStartGame]=useState(true)

  const toogleGame=()=>{
    setStartGame((prev)=>!prev);
  };

  return (
    <>
      {startGame ? <GamePlay/>: <StartGame toogle={toogleGame}/>}
    </>
  )
}

export default App
