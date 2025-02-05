import React from 'react'
import '../Pageskill/Pageskill.css'
import { BarGraph } from '../Bar.jsx'
import { Link } from 'react-router-dom'

const Pageskill = () => {
  return (
    <section className='pageskills'>
        <div className="pageskill-content">
          <div className="pagskil">
            <div className="pageskih1">
          <h1>My Skill</h1>
          
          <p>Although I specialize in creating beautiful sites for  businesses, I'm happy to take on other clients as well.  if you think I’d be a good match <Link to='/contact'>Send an Emali</Link></p>
          </div>
           <ul>
            <li>Photoshop</li>
            <li>Figma</li>
            <li>Html</li>
            <li>Css</li>
            <li>JavaScript</li>
            <li>ReactNative</li>
            <li>Reactjs</li>
            <li>Tailwindcss</li>
            <li>Nodejs</li>
            <li>Python</li>
           </ul>
          </div>
          <div className="pagskl">
            <BarGraph className="grp"/>
          </div>
        </div>
      
    </section>
  )
}

export default Pageskill
