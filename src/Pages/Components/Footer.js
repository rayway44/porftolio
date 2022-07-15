import React from 'react'
import '../css/Footer.css'

import {FaReact, 
  FaAws, 
  FaGithub, 
  FaNode,
  FaLinkedin} from 'react-icons/fa';

export default function Footer() {

  const size = 40

  return (
    <div className='footer-body'>
      <div>
        <span><a href='https://github.com/rayway44'><FaGithub size={size} /></a></span>
        <span><a href='https://www.linkedin.com/in/ray-letoa/'><FaLinkedin size={size} /></a></span>
      </div>
      <div>
        <span>Copyright © 2022 Ray Letoa. All Rights Reserved.</span>
      </div>
    </div>
  )
}
