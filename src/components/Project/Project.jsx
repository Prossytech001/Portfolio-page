import React from 'react'
import '../../App.css'
import Fash from '../../Assets/image/doom.jpg'
import Ecom from '../../Assets/image/E-commerce.jpg'
import Medi from '../../Assets/image/medical.webp'
import Crypto from '../../Assets/image/crypto.jpg'
import '../Project/Project.css'
import { FaRegShareFromSquare } from "react-icons/fa6";
import {motion} from 'framer-motion';
import { fadeIn } from '../Variants.jsx';
const Project = () => {
  return (
    <section className='Project'>
      
      <div className="prsp">
      <motion.h1 
       variants={fadeIn("down", 0.4)}
              initial={{ opacity: 0 }}
                  whileInView={"show"}
                  viewport={{once: false, amount: 0.3}}
      
      
      className='hhpro'>Project</motion.h1>
      <motion.div
      variants={fadeIn("down", 0.2)}
      initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
      
      
      className="projectcontent">
        <a href="https://agris-prosper-onyebuchi-s-projects.vercel.app/"><div className="projcon">
          <div className="pra"><img src={Fash} alt="" /></div>
          <div className="prb">
            <h1>Agriculture site</h1>
            
          </div>
          <div className="prc"><FaRegShareFromSquare/></div>
        </div></a>
        <a href="https://github.com/Prossytech001"><div className="projcon">
        <div className="pra"> <img src={Ecom} alt="" /></div>
          <div className="prb">
          <h1>E-commerce site</h1>
           
          </div>
          <div className="prc"><FaRegShareFromSquare/></div>
        </div></a>
       <a href="https://github.com/Prossytech001"><div className="projcon">
        <div className="pra"><img src={Medi} alt="" /></div>
          <div className="prb">
          <h1>Medical site</h1>
           
          </div>
          <div className="prc"><FaRegShareFromSquare/></div>
        </div></a>
        <a href="https://github.com/Prossytech001"><div className="projcon">
        <div className="pra"><img src={Crypto} alt="" /></div>
          <div className="prb">
          <h1>Crypto site</h1>
            
          </div>
          <div className="prc"><FaRegShareFromSquare/></div>
        </div></a>
      </motion.div>
      </div>
    </section>
  )
}

export default Project
/*import '../Project/Project.css'
import { FaRegShareFromSquare } from "react-icons/fa6";
import Mid from '../../Assets/image/medical.webp'*/