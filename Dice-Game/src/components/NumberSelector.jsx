import React from 'react'
import styled from "styled-components"
import { useState } from 'react'
export const NumberSelector = () => {

    const numbers=[1,2,3,4,5,6]
    const [selectNumber,setSelectNumber]=useState();

    console.log(selectNumber)
  return (
  <div>
    {numbers.map((value, i) => (
      <Box key={i} onClick={() => setSelectNumber(value)}>
        {value}
      </Box>
    ))}
  </div>
);
}
export default NumberSelector

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
`