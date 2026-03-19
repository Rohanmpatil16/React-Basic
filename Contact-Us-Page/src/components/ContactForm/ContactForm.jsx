import React from 'react'
import style from "./ContactForm.module.css"
import Button from '../Button/Button'
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


export const ContactForm = () => {
  return (
    <section className={style.container}>
    <div className={style.container_form}>
        <div className={style.button}>
            <Button icon={<BiSolidMessageAltDetail/>}text="VIA SUPPORT CHAT"  fontSize="24px"/>
            <Button icon={<BsFillTelephoneFill/>} text="VIA CALL" fontSize="24px" />

        </div>
        <div className={style.button_outline}>
          <Button 
          isOutline={true}
          icon={<MdEmail/>} text="VIA EMAIL" fontSize="24px" />
        </div>

        <form action="">
          <div className={style.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>

          <div className={style.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div className={style.form_control}>
            <label htmlFor="message">Message</label>
            <textarea name="text" id="message" rows="4" />
          </div>
        </form>
        <div style={{
          display:"flex",
          justifyContent:"end",
          marginTop:"20px"
        }}>
        <Button text="SUBMIT"  fontSize="24px"/>

        </div>
      </div>
      <div className={style.contact_image}>
        <img src="./images/image copy.png" alt="caller" />
      </div>
    </section>
    
  )
}

export default ContactForm
