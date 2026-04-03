import React from 'react'
import styled from "styled-components"

const RoleDice = () => {
  return (
    <DiceContainer>
    <div><img src="/images/dice_2.png" alt="Dice 2" /></div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer=styled.div`
margin-top:40px;
display:flex;
flex-directions:column;

`