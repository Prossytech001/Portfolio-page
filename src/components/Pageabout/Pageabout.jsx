import React from 'react'
import Pic1 from '../../Assets/image/whatabout.jpg'
import '../Pageabout/Pageabout.css'
import { Link } from 'react-router-dom'

const Pageabout = () => {
  return (
    <section className='pageabout'>
         <div class="jpt"></div>
    <div class="ppt"></div>
    <div class="kpt"></div>
    <div class="mpt"></div>
        <div className="pageabout-content">
            <div className="pageabot">
                <div className="pag1">
                    <h1>Expert Frontend developer</h1>
                    <p>Engineer valued for driving high-performance accessible web experiences. I design quality, user-friendly and scalable products regardless of stack.</p>
                </div>
                <div className="pag2">
                    <h1>Design</h1>
                    <p>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</p>
                </div>
            </div>
            <div className="pageabot2">
            <div className="pag3">
                <h1>Engineering</h1>
                <div className="pagimg">
                    <img src={Pic1} alt="" />
                </div>
            </div>
            <div className="pag4">
                
                <p>In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.</p>
                <h2>Looking forward to work with you</h2>
                <p>For some reason, this surprises a lot of people. 😅 <Link to='/contact'> Send Email</Link></p>
            </div>
            </div>
        </div>
      
    </section>
  )
}

export default Pageabout
