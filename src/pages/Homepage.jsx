import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx';
import Hero from '../components/Hero/Hero.jsx';

import About from '../components/About/About.jsx';
import Edu from '../components/Education/Education.jsx';
import Skill from '../components/Skill/Skill.jsx';
import Project from '../components/Project/Project.jsx';
import Ideas from '../components/Ideas/Ideas.jsx';
import Faq from '../components/Freq/Faq.jsx';
import Contact from '../components/Contact/Contact.jsx';
import Update from '../components/Update/Update.jsx';
import Footer from '../components/Footer/Foot.jsx';


const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      
      <About/>
      <Edu/>
      <Skill/>
      <Project/>
      <Ideas/>
      <Contact/>
      <Faq/>
      <Update/>
      <Footer/>
    </div>
  )
}

export default Homepage
