import React, { useState } from 'react'
import styled from "styled-components"

const RoleDice = () => {

  const [currentDice,setCurrentDice]=useState(1);

  const generateRandomDice=()=>{ 
    return Math.floor(Math.random()*(7-1)+1);    

  }

  const rollDice=()=>{
    const randomNumber=generateRandomDice();
    setCurrentDice((prev)=>randomNumber);
  }
  return (
    <DiceContainer>
    <div className='dice' onClick={rollDice}><img src={`/images/dice_${currentDice}.png`} alt={`Dice ${currentDice}`} /></div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer=styled.div`
margin-top:40px;
display:flex;
flex-direction:column;
align-items:center;

`