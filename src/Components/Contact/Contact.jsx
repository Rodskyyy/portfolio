import React, { useState } from "react";
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useContext } from 'react';
import { themeContext } from '../../Context';
const Contact = () =>{

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();

    const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5zabirt', 'template_pco0psr', form.current, 'fAxNuD_3x674l9rVW')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

    return(
        <div className="contact-form" id='Contact'>
            <div className="w-left">
                <div className="awesome">
                    <span style = {{color: darkMode? 'white': ''}} >Get in touch</span>
                    <span>Contact Me</span>
                    <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}> 
                    <input type="text" name="user_name" className="user" placeholder="Name"/>
                    <input type="email" name="user_email" className="user" placeholder="Email"/>
                    <textarea name="message" className="user" placeholder="Message"/>
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "Thaks for sending message to me, Appreciate it!"}</span>
                    <div className="c-blur1" style={{background: "var(--purple)"}}></div>
                </form>
            </div>
        </div>
    );
};
export default Contact;