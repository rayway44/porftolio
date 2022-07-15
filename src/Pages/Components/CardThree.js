import React from 'react'
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

export default function CardThree() {

  // resize icons
  const size = 20

  return (
    <div className='carosoul'>
        <div className='card-title'>
          Tupu Time
        </div>
        <Carousel className='border'>
                <div>
                    <img src='images/tupu-time-01.png' alt='' className='carosoul-pic' />
                    
                </div>
                <div>
                  <img src='images/tupu-time-02.png' alt='' className='carosoul-pic' />

                </div>
                <div>
                  <img src='images/tupu-time-03.png' alt='' className='carosoul-pic' />

                </div>
                <div>
                  <img src='images/tupu-time-04.png' alt='' className='carosoul-pic' />

                </div>
            </Carousel>

            <div className='card-description'>
              This was another project given by Moana Digital Agency where we took another design via Figma and cut it up utilising React Components and then deployed via Vercel to <a href="https://tupu-time.vercel.app/">Tupu time</a>
            </div>

            <div className='card-icons'>
              <span className='icon-border'><FaReact size={size}/><br/>React</span>
              <span className='icon-border'><SiVercel size={size}/><br/>Vercel</span>
              <span className='icon-border'><FaGithub size={size}/><br/>Github</span>
            </div>
    </div>
  )
}
