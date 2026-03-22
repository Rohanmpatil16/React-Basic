import React from 'react'
import styled from "styled-components"
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
export const GamePlay = () => {
  return (
   <main>
    <TotalScore />
    <NumberSelector />
   </main>
  )
}
export default GamePlay