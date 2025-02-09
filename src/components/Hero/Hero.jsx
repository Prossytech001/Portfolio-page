import React from 'react'
import '../../App.css'


import '../Hero/Hero.css';

import { fadeIn } from '../Variants.jsx';
import {motion} from 'framer-motion';

import '../Navbar/Navbar.jsx';
import { IoExtensionPuzzle } from "react-icons/io5";
import { PiTriangleFill } from "react-icons/pi";
import { FaSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';




const Hero = () => {
  return (
    <section className='hero'>
        <div class="jpt"></div>
    <div class="ppt"></div>
    <div class="kpt"></div>
    <div class="mpt"></div>
      <label id='overla' htmlFor="sidebar-active"></label>
      <div className="hore">
      <div className="hero-h1">Hello</div>
      <div className="herotrian"><IoExtensionPuzzle className="herotriang"/></div>
      <div className="hrosqu"><PiTriangleFill className="hrosqu"/></div>
      <label id='overlay' htmlFor="sidebar-active"></label>
      
      <div className="hero-content">
        <motion.div 
        variants={fadeIn("down", 2)}
        initial={{ opacity: 1 }}
        whileInView={"show"}
        viewport={{once: false, amount: 1}}
        
        
        className="hero-con1">
          <div className="hlq">
          <h1>Hello there! I'm <span className="hers">Onyebuchi Prosper</span></h1>
          <h2 data-text="Fullstack_Developer">Fullstack_Developer</h2>
          <h3>Working remotely from Nigeria</h3>
          </div>
        </motion.div>
        
          
      </div>
      <label id='overlay' htmlFor="sidebar-active"></label>
      <motion.div 
      variants={fadeIn("up", 2)}
      initial={{ opacity: 1}}
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      
      
      className="herosbut">
      <div className="hero-btn">
                
      <Link to='/contact' className='herohire'>Hire me</Link>
      <Link to='/featuredpost' className='herohir' > My works</Link>
                
             </div>
             
              
              </motion.div>
      <motion.div 
      variants={fadeIn("up", 0.5)}
      initial={{ opacity: 0 }}
      whileInView={"show"}
      viewport={{once: false, amount: 0.2}}
      
      className="hero-content2">
        <div className="hercons">
        <div className="hero-con3">
      <p>Welcome to my corner of the digital world! I'm a passionate fullstack developer with a knack for crafting innovative web solutions that blend seamless functionality with stunning design.</p>
              </div>
              
              <div className="hero-con5">
            
               
                  <div>
                  <p className='th'>3+</p>
                  <p className='tb'>Years Working </p>
                  <p className='tf'>Experience</p>
                  </div>
              
                
                <div>
                  <p className='th'>50+</p>
                  <p className='tb'>Completed</p>
                  <p className='tf'>Projects</p>
                </div>
               
               
                <div>
                  <p className='th'>50+</p>
                  <p className='tb'>Clients</p>
                  <p className='tf'>Worldwide
                  </p>
                </div>
               
             

              </div>
              </div>
      </motion.div>

      </div>
      
    </section>
  )
}

export default Hero
