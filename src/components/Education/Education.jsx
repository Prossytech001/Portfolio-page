import React from 'react'
import '../Education/Education.css'
import { FaAward } from "react-icons/fa"
import '../../App.css'



const Education = () => {
  return (
    <section className='eduction' id='e'>
        <div className="educontainer">
        <h1
        
        
        className='eedu'>Education</h1>
        <div
       
        
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
        </div>
        </div>
    </section>
  )
}

export default Education
