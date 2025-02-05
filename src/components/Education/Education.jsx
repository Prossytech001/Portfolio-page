import React from 'react'
import '../Education/Education.css'
import { FaAward } from "react-icons/fa"
import '../../App.css'
import {motion} from 'framer-motion';
import { fadeIn } from '../Variants.jsx';

const Education = () => {
  return (
    <section className='eduction' id='e'>
        <motion.h1
        variants={fadeIn("down", 0.4)}
        initial={{ opacity: 0 }}
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
        
        className='eedu'>Education</motion.h1>
        <motion.div
        variants={fadeIn("down", 0.2)}
        initial={{ opacity: 0 }}
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
        
        className="educon">
            <div className="educon1">
                <div className="eduicon">
                    <FaAward/>
                </div>
                <div className="educacon">
                <h1>2019 - 2020</h1>

                 <h2>Web Development Certifications</h2>
                   <h3>Jenga Tech institute</h3>
                </div>
            </div>
            <div className="educon1">
            <div className="eduicon">
                    <FaAward/>
                </div>
                <div className="educacon">
                <h1>2021 - 2022</h1>

                 <h2>Programming course</h2>
                   <h3>Webcodecamp</h3>
                </div>
            </div>
            <div className="educon1">
            <div className="eduicon">
                    <FaAward/>
                </div>
                <div className="educacon">
                <h1>2021 - 2022</h1>

                 <h2>Design & Technology</h2>
                   <h3>Jenga institute</h3>
                </div>
            </div>
        </motion.div>
      
    </section>
  )
}

export default Education
