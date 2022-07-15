import React, {useState, useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import '../css/Card.css'

import {FaReact, 
  FaAws, 
  FaGithub, 
  FaNode} from 'react-icons/fa';

import {SiNextdotjs, 
  SiCircleci, 
  SiVercel, 
  SiGooglecloud, 
  SiIbmwatson, 
  SiMongodb} from 'react-icons/si';

export default function CardOne() {

  // resize icons
  const size = 20

  return (
    <div className='carosoul'>
        <div className='card-title'>
          Mission Technius
        </div>
        <Carousel className='border'>
                <div>
                    <img src='images/mission-technius-01.png' alt='' className='carosoul-pic' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                <img src='images/mission-technius-02.png' alt='' className='carosoul-pic' />
                </div>
                <div>
                <img src='images/mission-technius-03.png' alt='' className='carosoul-pic' />
                </div>
                <div>
                <img src='images/mission-technius-04.png' alt='' className='carosoul-pic' />
                </div>
            </Carousel>

            <div className='card-description'>
              As part of an internship I did with Auckland Council and Mission Ready HQ where I was passed on this code and continued development. I worked with another Dev where I was tasked with having the app run faster, cross browser compatible, and deployed online for testing for UX team. We also used Github for Version Control.<br/><br/>

              Feel free to play on <a href='https://technius.vercel.app/'>Technius</a> with login details for student being<br/><br/>

              Student Email: student@student.com<br/>
              Student Password: student
            </div>

            <div className='card-icons'>
              <span className='icon-border'><SiNextdotjs size={size}/><br/>Next.js</span>
              <span className='icon-border'><SiVercel size={size}/><br/>Vercel</span>
              <span className='icon-border'><FaGithub size={size}/><br/>Github</span>
            </div>
    </div>
  )
}
