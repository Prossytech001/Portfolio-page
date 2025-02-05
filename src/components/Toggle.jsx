import React, {useState} from 'react'

const Toggle = () => {
    const [theme, setTheme] = useState(true)
    const toggleTheme =() =>{
 setTheme(!theme);
 document.body.classList.toggle("darkmode")
    }
  return (
    <>
     <div className={theme? 'switch-mode':'switch-mode dark'} onClick={()=>toggleTheme()}>
        <div></div>
        </div> 
    </>
  )
}

export default Toggle