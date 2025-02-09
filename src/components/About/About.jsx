import React from 'react'
import '../About/About.css'
import img from '../../Assets/image/portfoliopic.jpg'
import '../../App.css'
import {motion} from 'framer-motion';
import { fadeIn } from '../Variants';
import {Link} from 'react-scroll';

const About = () => {
  return (
    <motion.section 
   
    
    className='about' >
        <motion.div 
        variants={fadeIn("down", 0.4)}
        initial={{ opacity: 0 }}
    whileInView={"show"}
    viewport={{once: false, amount: 0.3}}
        
        
        
        
        
        
        
        
        className="about-content">
          
          
          <label id='overlay' htmlFor="sidebar-active"></label>
          <div className="letmeshow">
            <div 
             


            className="about-con1"><img src={img} alt="" /></div>
            </div>
            <div
           
            className="about-con2">
                <h1><span className='abosp'>About</span> Me</h1>
                <h2>I am <span className='abotn'> Onyebuchi Prosper</span></h2>
                <h3>An Enthusiastic Fullstack Developer</h3>
                <p>Welcome to my corner of the digital world! I'm a passionate fullstack developer with a knack for crafting innovative web solutions that blend seamless functionality with stunning design. With a strong foundation in both front-end and back-end technologies, I thrive on turning ideas into reality through clean code and intuitive user experiences.</p>
                <Link to='contact' offset={-100} spy={true} className='mecony'><button>Contact Me</button></Link>
            </div>
        </motion.div>
        
      
    </motion.section>
  )
}

export default About
