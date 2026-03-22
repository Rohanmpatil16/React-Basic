import React from 'react'
import styled from "styled-components"


export const StartGame = ({toogle}) => {
  return (
    <Container>
        <div>
     <img className="dice-image" src="./images/dices 1.png" alt="hlo" />
     </div>
     <div className='content'>
        <h1>Dice Game</h1>
       <Button onClick={toogle}>Play Now</Button>
     </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`max-width:1182px;display:flex;margin: 0 auto;justify-content: center;align-items: center;gap: 50px;
.content {
    h1{
    font-size: 96px;
    white-space: nowrap;
}
}

.dice-image{
    width: 700px;
    height: 600px;
    margin-top: 50px;}

`

const Button=styled.button`width: 220;
height: 44;
angle: 0 deg;
opacity: 1;
gap: 10px;
border-radius: 5px;
padding-top: 10px;
padding-right: 18px;
padding-bottom: 10px;
padding-left: 18px;
background: #000000;
color: #FFFFFF;
cursor: pointer;
min-width: 220px;
border: none;

&:hover{
background: #ffffff;
color: #000000;
border: 1px solid #000000;
transition 0.3s background ease-in;
}`

