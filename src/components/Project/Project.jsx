import React from 'react'
import '../../App.css'
import Fash from '../../Assets/image/doom.jpg'
import Ecom from '../../Assets/image/E-commerce.jpg'
import Medi from '../../Assets/image/medical.webp'
import Crypto from '../../Assets/image/crypto.jpg'
import '../Project/Project.css'
import { FaRegShareFromSquare } from "react-icons/fa6";

const Project = () => {
  return (
    <section className='Project'>
      
      <div className="prsp">
      <h1 
      
      
      
      className='hhpro'>Project</h1>
      <div
     
      
      className="projectcontent">
        <a href="#"><div className="projcon">
          <div className="pra"><img src={Fash} alt="" /></div>
          
          <div className="prc"><FaRegShareFromSquare/></div>
        </div></a>
        <a href="#"><div className="projcon">
        <div className="pra"> <img src={Ecom} alt="" /></div>
          
          <div className="prc"><FaRegShareFromSquare/></div>
        </div></a>
       <a href="#"><div className="projcon">
        <div className="pra"><img src={Medi} alt="" /></div>
         
          <div className="prc"><FaRegShareFromSquare/></div>
        </div></a>
        <a href="#"><div className="projcon">
        <div className="pra"><img src={Crypto} alt="" /></div>
         
          <div className="prc"><FaRegShareFromSquare/></div>
        </div></a>
      </div>
      </div>
    </section>
  )
}

export default Project
/*import '../Project/Project.css'
import { FaRegShareFromSquare } from "react-icons/fa6";
import Mid from '../../Assets/image/medical.webp'*/