import React from 'react'
import styled from "styled-components"
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
export const GamePlay = () => {
  return (
    <mainContainer>
   <main>
    <div className='top_section'>
      <TotalScore />
    <NumberSelector />
    </div>
   </main>
   <RoleDice/>
    </mainContainer>
    
  )
}
export default GamePlay

const mainContainer=styled.main`
.top_section{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 0 20px;}
`