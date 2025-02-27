import React from 'react'
import '../Contact/Contact.css';
import { ImPhoneHangUp } from "react-icons/im";
import { CiAt } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import '../../App.css'
import {motion} from 'framer-motion';
import { fadeIn } from '../Variants.jsx';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_93quv1k', 'template_hy55l78', form.current, {
        publicKey: 'gpqeelcioMorYiXnI',
      })
      .then(
        () => {
          document.getElementById('output').innerHTML = " 'Your massage has be sent, and thank you for your comment'";
          console.log('success');
          document.getElementById('output').style.color = 'green';
        },
        (error) => {
          console.log('FAILED...', error.text);
          document.getElementById('output').innerHTML = "OOps,Check your internet";
          document.getElementById('output').style.color = 'red';
        },
      );
      document.getElementById("firstname").value = "";
      document.getElementById("secondname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("comment").value = "";

  };
  return (
    <section className='contact'>
        <div className="contact-con">
            <div className="contactcon1">
                <motion.p
                variants={fadeIn("down", 0.2)}
                        initial={{ opacity: 0 }}
                            whileInView={"show"}
                            viewport={{once: false, amount: 0.3}}
                >Got Some question?</motion.p>
                <motion.h1
                variants={fadeIn("down", 0.4)}
                        initial={{ opacity: 0 }}
                            whileInView={"show"}
                            viewport={{once: false, amount: 0.3}}
                >Contact Me</motion.h1>
            </div>
            <motion.div
            variants={fadeIn("down", 0.6)}
                    initial={{ opacity: 0 }}
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.3}}
            
            className="contactcon2">
                <div className="contactinfo">
                    <h1>Contact Info</h1>
                    <p>Fill the form to get in touch with me</p>
                    <div className="contacticon">
                        <div className="conicn"><div className="coin"><CiAt/></div><h4>prosperonyebuchi01@gmail.com</h4></div>
                        <div className="conicn"><div className="coin"><ImPhoneHangUp/></div><h4>07026448414</h4></div>
                        <div className="conicn"><div className="coin"><FaLocationDot/></div><h4> Aba ,Abia state</h4></div>
                    </div>
                </div>
                <div className="contactinput">
                    <h1>Keep In Touch</h1>
                    <div className="coninput">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="coninput1">
                            <div className="conput1">
                                <input type="text" className='inpp' name='user_first_name' id='firstname' required/>
                                <label htmlFor="firstname" className='lab'>FirstName</label>
                            </div>
                            <div className="conput1">
                                
                                <input type="text" name='user_last_name' className='inpp' id='secondname' required/>
                                <label htmlFor="secondname"  className='lab'>SecondName</label>
                            </div>
                        </div>
                        <div className="coninput1">
                        <div className="conput1">
                              
                                <input type="email" name='user_email' className='inpp' id='email' required/>
                                <label htmlFor="email" className='lab'>Email</label>
                            </div>
                            <div className="conput1">
                               
                                <input type="text" name='user_number' className='inpp'id='number' required/>
                                <label htmlFor="number" className='lab'>Phone number</label>
                            </div>
                            
                        </div>
                        <div className="coninput3">
                        
                                <textarea name="message" id='comment' placeholder='Massage'cols="30" rows="10"></textarea>
                                
                                
                            
                        </div>
                        <div className="coinbtn">
                            <input type="submit" name='submit' value="Send"/>
                        </div>
                        <div className="output" id='output'></div>
                        
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
      
    </section>
  )
}

export default Contact
