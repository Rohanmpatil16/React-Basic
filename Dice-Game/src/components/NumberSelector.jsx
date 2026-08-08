import React from 'react'
import styled from "styled-components"
import { useState } from 'react'
export const NumberSelector = () => {

    const numbers=[1,2,3,4,5,6]
    const [selectNumber,setSelectNumber]=useState();

    console.log(selectNumber)
  return (
  <NumberSelectorContainer>
  <div className='flex'>
    {numbers.map((value, i) => (
      <Box key={i} onClick={() => setSelectNumber(value)}
      isSelected={value === selectNumber}>
        {value}
      </Box>
    ))}
  </div>
  <p>Selected Number</p>
  </NumberSelectorContainer>
);
}
export default NumberSelector

const NumberSelectorContainer = styled.div`

display:flex;
flex-direction:column;
align-items:end;
.flex{
  display:flex;
  gap:24px;}
  p{font-weight: 700;
  font-size:24px;
  }`

const Box =styled.div`
width:72px;

height:72px;
background: #FFFFFF;
border: 1px solid #000000;
display:grid;
place-items:center;
cursor: pointer;
font-weight: 700;
font-size:24px;
background:${(props)=>props.isSelected ? "#000000" : "#FFFFFF"};
color:${(props)=>props.isSelected ? "#FFFFFF" : "#000000"};
`