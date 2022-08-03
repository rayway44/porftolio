import React from 'react'
import '../css/newSectionOne.css'

import {
    FaGithub, 
    FaLinkedin} from 'react-icons/fa';

export default function newSectionOne() {
  return (
    <div className='new-section-one'>
        <div className='new-section-one-left'>
            <img src='images/git.jpg' alt='' />
        </div>
        <div className='new-section-one-right'>
            <div className='new-section-one-top'>
            <span className='line-one'>Hey,</span>
            <span className='line-two'>Im Ray Letoa</span>
            <span className='line-three'>Full Stack Developer</span>
            </div>
            <div className='new-section-one-bottom'>
            <a href='https://github.com/rayway44'><FaGithub className='section-one-icon' size={70}/></a>
            <a href='https://www.linkedin.com/in/ray-letoa/'><FaLinkedin className='section-one-icon' size={70}/></a>
            </div>
        </div>
    </div>
  )
}
