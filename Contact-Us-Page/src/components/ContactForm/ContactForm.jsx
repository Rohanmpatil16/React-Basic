import React from 'react'
import style from "./ContactForm.module.css"
import Button from '../Button/Button'
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";


export const ContactForm = () => {
  return (
    <div className={style.container}>
        <div className={style.contact_form}>
            <Button text="VIA SUPPORT CHAT" icon={<BiSolidMessageAltDetail/>} fontSize="24px"/>
            <Button text="VIA CALL" icon={<BsFillTelephoneFill/>} fontSize="24px"/>

        </div>
        <div className={style.contact_image}></div>
    </div>
  )
}

export default ContactForm
