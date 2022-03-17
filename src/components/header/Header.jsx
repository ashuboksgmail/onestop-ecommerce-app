import React from 'react'
import "./header.css"
import CTA from './CTA'
import MY from '../../assets/textures/my-photo.png'
import SOCIALS from "./HeaderSocials"
const Header = () => {
  return (
   <header>
     <div className="container header_container">
       <h5>Hello I'm</h5>
       <h1>Aabiskar</h1>
       <h5 className="text-light">Fullstack Developer</h5>
     <CTA/>
     <SOCIALS />
     <div className="me">
     <img src={MY} alt="my-image" />
     </div>
     <a href="#contact" className="scroll__down">Scroll Down</a>
     
     </div>

   </header>
  )
}

export default Header