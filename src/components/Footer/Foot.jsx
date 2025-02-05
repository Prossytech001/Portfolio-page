import React from 'react'
import '../Footer/Footer.css';
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import '../../App.css'
import {Link} from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";


const Foot = () => {
  return (
    <section className='footer'>
        <div className="footer-content">
            <div className="footscont">
            <div className="foot-con">
                <div className="footlogo">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M791-55 280-566l-87 87 183 183-56 56L80-480l143-143L55-791l57-57 736 736-57 57Zm-54-282-57-57 87-87-183-183 56-56 240 240-143 143Z"/></svg>
                PT
                </div>
                <p>Our community is every fast and reliable with a good customer rating</p>
                <div className="footicons">
                    <a href=""><div className="footic"><FaFacebookF/></div></a>
                    <a href="https://github.com/Prossytech001"><div className="footic"><FaGithub/></div></a>
                    <a href="https://linkedin.com/in/prosper-onyebuchi-548535307"><div className="footic"><FaLinkedin/></div></a>
                    <a href="https://www.tiktok.com/@mea_niq1?is_from_webapp=1&sender_device=pc"><div className="footic"><FaTiktok/></div></a>
                </div>
            </div>
            <div className="foot-co">
                <ul>
                    <a href="Hot link"><li className='hotl'>Hot Links</li></a>
                  <Link to="/" 
                        ><li>Home</li></Link>
                    <Link to="/about" 
                        ><li>About</li></Link>
                    <Link to="/blog" 
                         ><li>Blog</li></Link>
                    <Link to="/skill" 
                        ><li>Skill</li></Link>
                    <Link to="/featuredpost" 
                          ><li>Featured Post</li></Link>
                   
                    <Link to="/contact" 
                         ><li>Contact</li></Link>
                </ul>
            </div>
            <div className="foot-c">

                <ul>
                    <li className='hotl'>Others</li>
                    <label htmlFor="term"><li>Privacy Policy</li></label>
                    <label htmlFor="term"><li>Terms and Conditions</li></label>
                    <label htmlFor="term"><li>Cookie Policy</li></label>
                </ul>
            





            </div>
            </div>
            <div className="fotslast">
                <h1>Copyright © All rigth reserved - | 2024/2025</h1>
                <p>Built with love by Onyebuchi Prosper AKA Prossy Tech</p>
            </div>


               
            <input type="checkbox" id='term' />
            <div className="footer-Term">
                <div className="futrcon">
                
            <label htmlFor='term' className="togs"><RxCross2/></label>
                <div className="termcontent">
                   <div className="terconttent">
                    <input type="checkbox" id='tre'/>
                    <label htmlFor="tre" className='tra'> <h1>TERM AND CONDITIONS</h1></label>
                        <div className="tri">
                        <p>We may modify those terms or any additional terms that apply to aservice to, for example, refliect changes to the law or changes to our Services. You should look at the regularly, we'll post notice of modifications to these terms on this page</p>
                    <div className="trebtn">
                    <button className='decline'> <label htmlFor="tre" className='tra hom'>  Decline</label></button>
                    <button className='accept'><label htmlFor="tre" className='tra hom'> Accept</label></button>
                        </div>
                    </div>
                   </div>
                   <div className="priconttent">
                   <input type="checkbox" id='pri'/>
                    <label htmlFor="pri" className='pop'> <h1>PRIVACY POLICY</h1></label>
                        <div className="coc">
                        <p>We ensure that we give you the experience on our website .if you apply our privacy policy</p>
                        <button className='accept'><label htmlFor="pri" className='pop hom'>Privacy policy</label></button>
                        </div>
                   </div>
                   <div className="cooconttent">
                   <input type="checkbox" id='coo'/>
                    <label htmlFor="coo" className='cop'> <h1>COOKIES POLICY</h1></label>
                        <div className="coc">
                        <p>We use cookies to ensure that we give you the experience on our website .if you continue to use this site we will assume that you are happy with it</p>
                            <button className='accept'><label htmlFor="coo" className='cop hom'>Accept</label></button></div>
                   </div>
                </div>
                </div> 
            </div>
        </div>
      
    </section>
  )
}

export default Foot
