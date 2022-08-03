import React, {useState} from 'react'
import '../css/SectionOne.css'
import { HiOutlineChevronDoubleDown, HiChevronDown } from "react-icons/hi";


export default function SectionOne() {


  return (
    <div className='section-one-body'>
        <div>
          {/* TOP */}
        </div>

        <div>
          <span className='line-one'>Hey,</span>
          <span className='line-two'>Im Ray Letoa</span>
          <span className='line-three'>Full Stack Developer</span>
        </div>

        <div className='section-one-bottom'>  
          {/* <div className='section-one-bottom-button' onMouseOver={rollOver} onMouseOut={rollOut}>
            {buttonArrow}
          </div> */}
          
        </div>
    </div>
  )
}
