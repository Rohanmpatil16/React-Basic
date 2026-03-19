import React from 'react'
import { BiSolidMessageAltDetail } from "react-icons/bi";
import style from "./Button.module.css"
import { BsFillTelephoneFill } from "react-icons/bs";



export const Button = (props) => {
    console.log(props)
  return (
    <div>
        <button className={props.isOutline ? style.button_outline : style.button_primary}>
            {/* <BiSolidMessageAltDetail  />
            <BsFillTelephoneFill /> */}
            {props.text}
            {props.icon}
        </button>

        
    </div>
  )
}

export default Button
