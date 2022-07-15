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

export default function CardFour() {

  // resize icons
  const size = 20

  return (
    <div className='carosoul'>
        <div className='card-title'>
          Turners Landing Page
        </div>
        <Carousel className='border'>
                <div>
                    <img src='images/turners-01.png' alt='' className='carosoul-pic' />
                    
                </div>
                <div>
                <img src='images/turners-02.png' alt='' className='carosoul-pic' />
                </div>
                <div>
                <img src='images/turners-03.png' alt='' className='carosoul-pic' />
                </div>
            </Carousel>

            <div className='card-description'>
            This was a Mission Ready project I did with a fellow UX where we were tasked with re-designing the Turners Car Landing pages. I got given the design and cut it up with React and then connected a Circle CI to my github Repo which then deployed it statically to AWS. Here I also implemented an IBM Watson Chat bot.<br/><br/> 

Feel free to check the final prototype on <a href='http://mission05-bucket.s3-website-us-east-1.amazonaws.com/'>Turners Cars Land Page</a>
            </div>

            <div className='card-icons'>
              <span className='icon-border'><FaReact size={size}/><br/>React</span>
              <span className='icon-border'><SiCircleci size={size}/><br/>Circle CI/CD</span>
              <span className='icon-border'><FaAws size={size}/><br/>AWS</span>
              <span className='icon-border'><FaGithub size={size}/><br/>Github</span>
              <span className='icon-border'><SiIbmwatson size={size}/><br/>IBM Watson</span>
              <span className='icon-border'><FaNode size={size}/><br/>Node.js</span>
            </div>
    </div>
  )
}
