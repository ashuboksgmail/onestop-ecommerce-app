import React from 'react'
import "./nav.css"
import {BiHome} from "react-icons/bi"
import {BiUser} from "react-icons/bi"
import {GiSoapExperiment} from "react-icons/gi"
import {MdMiscellaneousServices} from "react-icons/md"
import {MdContactPhone} from "react-icons/md"
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' :''}> <BiHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' :''}> <BiUser /></a>
      <a href="#experience"  onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' :''}> <GiSoapExperiment /></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' :''}> <MdMiscellaneousServices /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' :''}> <MdContactPhone /></a>

    </nav>
  )

}

export default Nav