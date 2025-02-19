import React from 'react'

import '../Navbar/Navba.css'
import '../../App.css'


import { FaGithub,FaLinkedin,FaAlignLeft,FaAlignRight } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import Toggle from '../Toggle.jsx';

import {motion} from 'framer-motion';
import { fadeIn } from '../Variants.jsx';

import { PiSquaresFourThin } from "react-icons/pi";




const Navbar = () => {
    





  return (
    <section className='navbaf'>
      
      <motion.nav 
      variants={fadeIn("left", 0.5)}
      initial={{ opacity: 0 }}
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      
      
      
      
      
      
      
      className="navbar">
            <Link to='/'>
        <div className="navlogo">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M791-55 280-566l-87 87 183 183-56 56L80-480l143-143L55-791l57-57 736 736-57 57Zm-54-282-57-57 87-87-183-183 56-56 240 240-143 143Z"/></svg>
        <h1 className='h1logo'>PT</h1>
        </div>
        </Link>
        <div className="navlist">
          <ul>
            <li><Link to="/" 
      offset={100}>Home</Link></li>
            <li><Link to="/about" 
      >About</Link></li>
            <li><Link to="/blog" 
      >Blog</Link></li>
            <li><Link to="/skill" 
      >Skill</Link></li>
            <li><Link to="/featuredpost" 
      >Featured Post</Link></li>
           
      
            <li><Link to="/contact" 
      >Contact</Link></li>
          </ul>
        </div>
        <div className="navicon">
          <a href="https://linkedin.com/in/prosper-onyebuchi-548535307
"><div className="navi"><FaLinkedin/></div></a>
          
          <a href="https://github.com/Prossytech001"><div className="navi"><FaGithub/></div></a>
          {/*<div className="navdl"><button id='theme-switch'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
                </button></div>*/}
                <div className="togsnav"><Toggle/></div>
          <div className="navbtn"><Link to='/contact' ><button>Let Talk</button></Link></div>

        
        </div>
        
        <input type="checkbox"  id='sidebar-active' className='suke'/>
        <label id='overlay' htmlFor="sidebar-active" ></label>
        <label htmlFor="sidebar-active" className='open-sidebar-button'>
          <PiSquaresFourThin/>
        </label>
        
        
         
        <div 
        


        className='link-container' id='dispay'>
        
        
        
        <ul className='sidebars'>
         <label htmlFor="sidebar-active" className='close-sidebar-button logs'>
        <div className="svlo"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M791-55 280-566l-87 87 183 183-56 56L80-480l143-143L55-791l57-57 736 736-57 57Zm-54-282-57-57 87-87-183-183 56-56 240 240-143 143Z"/></svg>PT</div>
        <RxCross2 />
        
          </label>
          
          <label htmlFor="sidebar-active" className='mjj'>
            <Link to="/" className='nht' 
      ><li >Home</li></Link> 
            
                  
                  <Link to="/about" 
      ><li id=''>About</li></Link>
  
      <Link to="/blog" 
      ><li id=''>Blog</li></Link>
            <Link to="/skill" 
      ><li id=''>Skill</li></Link>
            <Link to="/featuredpost" 
      ><li id=''>Featured Post</li></Link>

       
       <Link to="/contact" 
      ><li >Contact</li></Link>
      </label>
      <div className="togsnavs"><Toggle/>Theme</div>
          </ul>
        
        </div>
        
      </motion.nav>
      
    </section>
  )
}

export default Navbar
