import React ,{  useRef, useState }from 'react'
import '../Pageeducation/Pageeduca.css'

import img1 from '../../Assets/image/img1s.png'






const Pageeduca = () => {

  
  return (
    <section className='blog'>
       <div class="jpt"></div>
    <div class="ppt"></div>
    <div class="kpt"></div>
    <div class="mpt"></div>
      
      
      <div className="blogcontent">
       
        <div className="blog1">
        <h1 className='bh1'>Blog</h1>
        <h2 className='bh2'>JavaScript Basics: Variables, Data Types
        </h2>
        <p>This lesson will cover the fundamental concepts of JavaScript, including variables, data types, loops, conditionals, and functions. Each section includes explanations, examples, and exercises to help solidify your understanding.
        </p>
        </div>
        <div className="blog2">
          <h1 className='bl2h1'>1. Variables in JavaScript
          </h1>
          <p className='bl2p'>Variables are containers for storing data values. In JavaScript, you can declare variables using var, let, or const.</p>
          <h1>Syntax:</h1>

          <div className="blogsyntax" >
          <div id="showco"></div>
          <code >
              <span className='colublue'>let</span> <span className='coloraqua'>variableName</span> = <span className='coloraqua'>value</span>;<br/>
              <span className='colublue'>const</span> <span className='coloraqua'>constantName</span> =<span className='coloraqua'>value</span>;

            </code>
             </div>
             <h1>Examples:</h1>
            <div className="blogsyntaxs" >
            <div id="showco1"></div>
            <code >
            <span className='colublue'> let</span> <span className='coloraqua'>name</span> = <span className='colorblwon'>"Alice"</span>;<br/>
            <span className='colublue'>let</span> <span className='coloraqua'>age</span> = <span className='coloraqua'>25</span>;<br/>
            <span className='colublue'> const</span> <span className='coloraqua'>isStudent</span> = <span className='colublue'>true</span>;<br/>
<br>
</br>
<span className='coloraqua'>console</span>.<span className='coloryel'>log</span>(<span className='coloraqua'>name</span>);<br/>
<span className='coloraqua'>console</span>.<span className='coloryel'>log</span>(<span className='coloraqua'>age</span>);<br/>
<span className='coloraqua'>console</span>.<span className='coloryel'>log</span>(<span className='coloraqua'>isStudent</span>);<br/>

            </code>
          </div>
       
      </div>
      <div className="blog3">
        <h1>2. Data Types in JavaScript
        </h1>
        <h2>JavaScript Data Types:
        </h2>
        <ul>
          <li className='headbl'>⦁	Primitive Types:</li>
          <li>⦁	String</li>
          <li>⦁	Boolean
          </li>
          <li>⦁	Number
          </li>
          <li>⦁	Null
          </li>
          <li>⦁	Undefined
          </li>
          <li>⦁	Symbol
          </li>
          <li className='headbl'>⦁	Reference Types:</li>
          <li>⦁	Object (including Arrays and Functions)
 
 </li>
        </ul>
        <h1>Example</h1>
        <div className="blog2syntax" >
         
          <code >
            //Primitive
            <span className='colublue'>let</span> <span className='coloraqua'>str</span> = <span className='colorblwon'>"Hello world"</span>; //String<br/>
            <span className='colublue'> let</span> <span className='coloraqua'>num</span> = <span className='coloraqua'>42</span>; //Number<br/>
            <span className='colublue'>let</span> <span className='coloraqua'>isActive</span> = <span className='colublue'>true</span>; //Boolean<br/>
            <span className='colublue'>let</span> <span className='coloraqua'>nothing</span> = <span className='colublue'>null</span>; //Null<br/>
            <span className='colublue'>let </span><span className='coloraqua'>notDefined</span>; //Undefined<br/>
            <br>
            </br>
            //Reference Types:<br/>
            <span className='colublue'>let</span> <span className='coloraqua'>arr</span> = [<span className='coloryel'>1, 2. 3,</span>]; //Array<br/>
           
            <span className='coloraqua'>console</span>.<span className='coloryel'>log</span>(<span className='colublue'>typeof</span> <span className='coloryel'>str</span>); //Output: string
           

          </code>
        </div>
      </div>
      <div className="blog4">
        <h1>Installation</h1>
         <h2>React vite installation</h2>
         <div className="bolg4syntax" >
          
          <code 
             
            >
              
          <span className='coloryel'>npm </span>create vite@latest<br/>
          <span className='coloryel'>cd</span> [to the folder]<br/>
          <span className='coloryel'>npm</span> install or <span className='coloryel'>npm</span> i<br/>
          <span className='coloryel'>npm</span> run dev<br/>
        
          </code>
         </div>
         <h2>React App installation</h2>
         <div className="bolg4syntax" >
          <code >
          <span className='coloryel'>npm </span>create-react-app<br/>
          <span className='coloryel'>cd</span> [to the folder]<br/>
          <span className='coloryel'>npm</span> install or <span className='coloryel'>npm</span> i<br/>
          <span className='coloryel'>npm</span> start<br/>
          </code>
         </div>
         <h2>React-icon installation</h2>
         <div className="bolg4syntax" >
          <code >
          <span className='coloryel'>npm </span>install react-icon<br/>
          <span className='colorblwon'>import</span> {`{`}FaAward {`}`} <span className='coloryel'>from</span> "react-icons/fa"<br/>
          {`<p>`}<span className='greenspns'>
          {`<FaAward/>`}</span>{`</p>`}
          </code>
         </div>
         <h2>React-Router-dom installation</h2>
         <div className="bolg4syntax">
          <code >
          <span className='coloryel'>npm </span>install react-router-dom<br/>
          
          </code >
         </div>
         <h2>Chart js installation</h2>
         <div className="bolg4syntax" >
          <code >
          <span className='coloryel'>npm </span>install chart.js react-chartjs-2<br/>
        
        
         
          </code>
         </div>
         <h1>Fake Data</h1>
         <div className="blog3fake" >
         
         
          <code >
          <span className='coloryel'>  import</span>  {`{` }<span className='coloryel'>CategoryScale</span>{`}`} from<span className='colorblwon'> "chart.js"</span>;<br/>
          

          <span className='coloryel'>export</span> const <span className='coloryel'>BarchartData</span> = {`{`}
    labels: [<br/>
      <span className='colorblwon'>
        
        'Photosh',<br/>
         "Figma",<br/>
          "Html",<br/>
           "Css",<br/>
          "JavaScript",<br/>
           "ReactNative",<br/>
            "Reactjs",<br/>
             "Tailwindcss",<br/>
             "Nodejs",<br/>
               "Python"<br/>
               </span>
            
    ],<br/>
    <span className='coloryel'>datasets</span>: [<br/>
       {`{`}
       <span className='colublue'>label</span>: ' FrontEnd and BackEnd Chart',<br/>
       <span className='colublue'>data</span>: [50, 40, 95, 90, 60,60,90,70,60,40],<br/>
       <span className='colublue'>backgroundColor</span>: 'rgb(30, 0, 255)',<br/>
       <span className='colublue'>borderColor</span>: 'rgb(157, 0, 255)',<br/>
       <span className='colublue'>borderWidth</span>: 0,<br/>
       <span className='colublue'> font</span>: 'rgb(30, 0, 255)',<br/>
       <span className='colublue'>barPercentage</span>: 1,<br/>
       <span className='colublue'> CategoryPercentage</span>:1,<br/>
            
        {`}`},<br/>
        
    ],<br/>
{`}`};
          </code>
         </div>
         <h1>Useage</h1>
         <div className="blousege" >
         
          <code >
          <span className='coloryel'>  import</span>  {`{`}<span className='coloryel'>Bar</span>{`}`} from 'react-chartjs-2'<br>
        </br>
        <span className='coloryel'>  import</span>  {`{`}<span className='coloryel'> Chart as ChartJS ,CategoryScale, LinearScale,  BarElement, Title,TimeScale,Legend</span>{`}`} from 'chart.js'<br>
        </br>
          ChartJS.register( <span className='coloryel'> CategoryScale, LinearScale, BarElement, Title,TimeScale,Legend</span>)<br>
          </br>
          <span className='coloryel'>  import</span>  {`{`} <span className='coloryel'> BarchartData</span>{`}`}  from '../src/components/Fakedata';<br>
          
          
          </br>
          <span className='coloryel'>  export</span>  const <span className='coloryel'>  BarGraph</span> = () {`=>`} <br/>
            const <span className='coloryel'>  options </span>= {`{}`};<br/>
        
          return {`<Bar options={options}data={BarchartData}/>`}<br/>
          </code>
         </div>
         <div className="blugimg1">
              <img src={img1} alt="" />
         </div>
      </div>
      
      </div>
    </section>
  )
}

export default Pageeduca
