import React from 'react'
import '../Skill/Skill.css'
import { FaHtml5, FaCss3Alt, FaReact ,FaNodeJs, FaPython, } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobephotoshop } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import '../../App.css'
import {motion} from 'framer-motion';
import { fadeIn } from '../Variants.jsx';
const Skill = () => {
  return (
    <section className='skill'>
      <div className="sdil">
      <motion.h1 
       variants={fadeIn("down", 0.2)}
              initial={{ opacity: 0 }}
                  whileInView={"show"}
                  viewport={{once: false, amount: 0.3}}
      
      
      className="sklih1">Skill</motion.h1>
      <motion.div
      variants={fadeIn}
      initial={{ opacity: 1 }}
          whileInView={"show"}
          viewport={{once: true, amount: 0.3}}
      
      
      
      className="skillcontent">
        <div className="skillcon">
            <h1 className='skillta'>UI/UX</h1>
            <div className="sklcon">
                <div className="skcon"><div className="skon"><SiAdobephotoshop/></div><h1>Photoshop</h1></div>
                <div className="skcon"><div className="skrate"><div className="skra"></div></div><h1>50%</h1></div>
            </div>
            <div className="sklcon">
            <div className="skcon"><div className="skon"><FaFigma/></div><h1>Figma</h1></div>
            <div className="skcon"><div className="skrate"><div className="skrb"></div></div><h1>40%</h1></div>
            </div>
        </div>
        <div className="skillcon">
        <h1 className='skillta'>FrontEnd</h1>
            <div className="sklcon">
            <div className="skcon"><div className="skon"><FaHtml5/></div><h1>Html</h1></div>
            <div className="skcon"><div className="skrate"><div className="skrc"></div></div><h1>95%</h1></div>
            </div>
            <div className="sklcon">
            <div className="skcon"><div className="skon"><FaCss3Alt/></div><h1>Css</h1></div>
            <div className="skcon"><div className="skrate"><div className="skrd"></div></div><h1>90%</h1></div>
            
            </div>
            <div className="sklcon">
            <div className="skcon"><div className="skon"><IoLogoJavascript/></div><h1>javaScript</h1></div>
            <div className="skcon"><div className="skrate"><div className="skre"></div></div><h1>60%</h1></div>
            </div>
            <div className="sklcon">
            <div className="skcon"><div className="skon"><TbBrandReactNative/></div><h1>ReactNative</h1></div>
            <div className="skcon"><div className="skrate"><div className="skrf"></div></div><h1>60%</h1></div>
            </div>
            <div className="sklcon">
            <div className="skcon"><div className="skon"><FaReact/></div><h1>React</h1></div>
            <div className="skcon"><div className="skrate"><div className="skrg"></div></div><h1>90%</h1></div>
            </div>
            <div className="sklcon">
            <div className="skcon"><div className="skon"><RiTailwindCssFill/></div><h1>Tailwindcss</h1></div>
            <div className="skcon"><div className="skrate"><div className="skrh"></div></div><h1>70%</h1></div>
            </div>
        </div>
        <div className="skillcon">
        <h1 className='skillta'>BackEnd</h1>
            <div className="sklcon">
            <div className="skcon"><div className="skon"><FaNodeJs/></div><h1>Node.js</h1></div>
            <div className="skcon"><div className="skrate"><div className="skri"></div></div><h1>60%</h1></div>
            </div>
            <div className="sklcon">
            <div className="skcon"><div className="skon"><FaPython/></div><h1>Python</h1></div>
            <div className="skcon"><div className="skrate"><div className="skrj"></div></div><h1>40%</h1></div>

            </div>
        </div>
      </motion.div>
      </div>
    </section>
  )
}

export default Skill
