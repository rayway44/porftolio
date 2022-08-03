import React, {useState, useRef} from 'react';
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import NewSectionOne from './Components/newSectionOne'
import About from './About'


import Footer from './Components/Footer'

import './css/Main.css'
import './css/Nav.css'

import { HiOutlineChevronDoubleDown, HiChevronDown } from "react-icons/hi";

export default function Main() {

  const projects = useRef();
  const home = useRef();
  const about = useRef();
  
  const [buttonArrow, setButtonArrow] = useState(<HiOutlineChevronDoubleDown size={90}/>)


function rollOver(){
  setButtonArrow(<HiChevronDown size={90}/>)
}
function rollOut(){
  setButtonArrow(<HiOutlineChevronDoubleDown size={90}/>) 
}

function homeSection(e){
  e.preventDefault()
  home.current.scrollIntoView({ behavior: "smooth" });
}
function aboutSection(e){
  e.preventDefault()
  about.current.scrollIntoView({ behavior: "smooth",block: "start" });
}
function projectsSection(e){
  e.preventDefault()
  projects.current.scrollIntoView({ behavior: "smooth",block: "start" });
}

  return (
    <div className="main-body-wrapper">
      <div className='nav-bar'>
      
        <a href=' ' className='nav-bar-button-link'>
        <div className='nav-bar-button' onClick={homeSection}>Home</div>
        </a>
        <a href=' ' className='nav-bar-button-link'>
        <div className='nav-bar-button' onClick={aboutSection}>About</div>
        </a>

        <a href=' ' className='nav-bar-button-link'>
        <div className='nav-bar-button' onClick={projectsSection}>Project</div>
        </a>
      </div>

        <div ref={home}></div>
        {/* <SectionOne /> Home Section */}
        <NewSectionOne /> {/* Home Section */}

        <div className='main-one-bottom-button-holder'>
          <div className='main-one-bottom-button' onClick={projectsSection} onMouseOver={rollOver} onMouseOut={rollOut}>
              {buttonArrow}
          </div>
        </div>

        <div ref={about}></div>
        <About/>
        
        <div ref={projects}></div>
        <SectionTwo /> {/* Projects */}

        <Footer  />
        
    </div>
  )
}
