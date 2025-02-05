import React from 'react'
import '../Freq/Faq.css'
import { FaPlus } from "react-icons/fa6";

const Faq = () => {
  return (
    <section className='faq'>
     <div className="faqcontent">
        <div className="faqh1">FAQ</div>
        <div className="faqdrop">
            <div className="faqdrop1">
            <input type="checkbox" id='drop1'/>
               <div className="dr1">
              
               <label htmlFor="drop1" ><FaPlus className='plusss'/></label>
                 <h1>Explain the concept and benefits of Test-Driven Development (TDD)</h1>
                 <p>TDD is a software development approach where the development team writes tests before the actual code. The TDD cycle includes the following components: 

Writing a test case that defines a desired improvement or new function, along with the code to fail it

Producing the minimum amount of code to pass that test

Refactoring the new code to acceptable standards</p>

               
               </div>
            </div>
            <div className="faqdrop2">
            <input type="checkbox" id='drop2'/>
               <div className="dr2">
              
               <label htmlFor="drop2" ><FaPlus className='plusss'/></label>
                 <h1>How do you handle feedback and revisions during the development process?</h1>
                 <p>Expect skilled candidates to have an established process for incorporating feedback into their work, such as: 

Thoroughly reviewing comments and asking for clarification if needed

Implementing necessary changes and revisions

Making sure the updated code meets the organization’s needs</p>

               
               </div>
            </div>
            <div className="faqdrop3">
            <input type="checkbox" id='drop3'/>
               <div className="dr3">
              
               <label htmlFor="drop3" ><FaPlus className='plusss'/></label>
                 <h1>What are web components and how do they promote code reusability?</h1>
                 <p>Web components are a set of web platform APIs allowing developers to create custom, reusable, and encapsulated HTML tags for web pages and apps. 

Candidates might mention the main technologies involved, such as: 

Custom Elements

Shadow DOM

HTML templates

ES Modules</p>

               
               </div>
            </div>
        </div>
     </div>
    </section>
  )
}

export default Faq
