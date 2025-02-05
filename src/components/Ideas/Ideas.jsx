import React from 'react'
import '../Ideas/Ideas.css'
import '../../App.css'
import Lady1 from '../../Assets/image/lady5.jpeg'
import Lady2 from '../../Assets/image/lady6.jpeg'
import Lady3 from '../../Assets/image/lady7.jpeg'
import Lady4 from '../../Assets/image/lady8.jpeg'
import Lady5 from '../../Assets/image/lady9.jpeg'
import { RxDoubleArrowRight,RxDoubleArrowLeft } from "react-icons/rx";

import {motion} from 'framer-motion';
import { fadeIn } from '../Variants.jsx';
import { FaQuoteLeft } from "react-icons/fa";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Ideas = () => {
  return (
    <section className='ideas'>
      
      <div className="ideacon">
        <motion.h1
        variants={fadeIn("down", 0.2)}
                initial={{ opacity: 0 }}
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.3}}
        
        className='idhk'>My <span className='idespsn'>Clients</span></motion.h1>
        <motion.p 
        variants={fadeIn("down", 0.4)}
                initial={{ opacity: 0 }}
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.3}}
        className='idpk'>Testimonies</motion.p>
      </div>

      <div className="ideaing">
        <div 
        variants={fadeIn("down", 0.6)}
                initial={{ opacity: 0 }}
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.3}}
        className='slide-wrapper'>
               
             
                <div className='slide-con'>
                <Splide>
                <SplideSlide>
                    <div className='slides'>
                      <div className="sidl">
                    <div className="slncon1">
                      <FaQuoteLeft/>
                    </div>
                    <div className="slncon2">
                      <p>I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage. I never have any problem at all..</p>
                    </div>
                    <div className="slncon3">
                      <img src={Lady1} alt="" />
                    </div>
                    <div className="slncon4">
                      <h1>Prossy Tech</h1>
                      <div className="stra">
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      </div>
                    </div>
                    </div>
                    </div>
                    </SplideSlide>
                    <SplideSlide>                       
                    <div className='slides'>
                    <div className="sidl">
                    <div className="slncon1">
                      <FaQuoteLeft/>
                    </div>
                    <div className="slncon2">
                      <p>You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.

Thanks, guys!</p>
                    </div>
                    <div className="slncon3">
                      <img src={Lady2} alt="" />
                    </div>
                    <div className="slncon4">
                      <h1>Esther onyekamma</h1>
                      <div className="stra">
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      </div>
                    </div>
                    </div>
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className='slides'>
                    <div className="sidl">
                    <div className="slncon1">
                      <FaQuoteLeft/>
                    </div>
                    <div className="slncon2">
                      <p>Wow. I just updated my site and it was SO SIMPLE. I am blown away. You guys truly kick ass. Thanks for being so awesome. High fives!</p>
                    </div>
                    <div className="slncon3">
                      <img src={Lady3} alt="" />
                    </div>
                    <div className="slncon4">
                      <h1>Blessing chioma</h1>
                      <div className="stra">
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      </div>
                    </div>
                    </div>
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className='slides'>
                    <div className="sidl">
                    <div className="slncon1">
                      <FaQuoteLeft/>
                    </div>
                    <div className="slncon2">
                      <p>Prossy Tech took our website experience up a quantum leap. From design concept through performance metrics, our new site exceeded our expectations – and from the results, our customers’ as well. Beyond being the most creative and collegial partners </p>
                    </div>
                    <div className="slncon3">
                      <img src={Lady4} alt="" />
                    </div>
                    <div className="slncon4">
                      <h1>Badie chuz</h1>
                      <div className="stra">
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      </div>
                    </div>
                    </div>
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className='slides'>
                    <div className="sidl">
                    <div className="slncon1">
                      <FaQuoteLeft/>
                    </div>
                    <div className="slncon2">
                      <p>The idea of doing a website redesign for a higher education website can be daunting and overwhelming. With Prossy Tech, we found a partner that truly understood us.</p>
                    </div>
                    <div className="slncon3">
                      <img src={Lady5} alt="" />
                    </div>
                    <div className="slncon4">
                      <h1>Great billion</h1>
                      <div className="stra">
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      </div>
                    </div>
                    </div>
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className='slides'>
                    <div className="sidl">
                    <div className="slncon1">
                      <FaQuoteLeft/>
                    </div>
                    <div className="slncon2">
                      <p>Their expertise, creativity, and dedication shone throughout the entire process, from initial design to post-launch refinements. They skillfully integrated our new brand elements, creating a visually striking and highly functional site that truly represents our company.</p>
                    </div>
                    <div className="slncon3">
                      <img src={Lady2} alt="" />
                    </div>
                    <div className="slncon4">
                      <h1>judge levi</h1>
                      <div className="stra">
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      </div>
                    </div>
                    </div>
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className='slides'>
                    <div className="sidl">
                    <div className="slncon1">
                      <FaQuoteLeft/>
                    </div>
                    <div className="slncon2">
                      <p>The result? A website that not only makes us proud but also will evolve with our business growth. We couldn’t be happier with the results and highly recommend Prossy Tech for any web development project.</p>
                    </div>
                    <div className="slncon3">
                      <img src={Lady1} alt="" />
                    </div>
                    <div className="slncon4">
                      <h1>kelvin uma</h1>
                      <div className="stra">
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      </div>
                    </div>
                    </div>
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className='slides'>
                    <div className="sidl">
                    <div className="slncon1">
                      <FaQuoteLeft/>
                    </div>
                    <div className="slncon2">
                      <p>heir work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!</p>
                    </div>
                    <div className="slncon3">
                      <img src={Lady3} alt="" />
                    </div>
                    <div className="slncon4">
                      <h1>Peter ruvli</h1>
                      <div className="stra">
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      </div>
                    </div>
                    </div>
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className='slides'>
                    <div className="sidl">
                    <div className="slncon1">
                      <FaQuoteLeft/>
                    </div>
                    <div className="slncon2">
                      <p>I wanted to learn how to persuade potential clients to get in touch with me because selling my service in a foreign language market is extremely difficult. that is where Prossy Tech came-in and built a good user interface for business</p>
                    </div>
                    <div className="slncon3">
                      <img src={Lady4} alt="" />
                    </div>
                    <div className="slncon4">
                      <h1>Pascal okore</h1>
                      <div className="stra">
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      </div>
                    </div>
                    </div>
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className='slides'>
                    <div className="sidl">
                    <div className="slncon1">
                      <FaQuoteLeft/>
                    </div>
                    <div className="slncon2">
                      <p>Prossy Tech has broken down  my business website in a logical way to help my client stay on track</p>
                    </div>
                    <div className="slncon3">
                      <img src={Lady1} alt="" />
                    </div>
                    <div className="slncon4">
                      <h1>Mendy dandy
                        
                      </h1>
                      <div className="stra">
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      <div className="starss"></div>
                      </div>
                    </div>
                    </div>
                    </div>
                    </SplideSlide>
                    </Splide>
                </div>
                
                
            </div>
            </div>
            
    </section>
  )
}

export default Ideas
/*<div className='slide-con'</div>*/