import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import '../css/Card.css'

import {FaReact, 
  FaAws, 
  FaGithub, 
  FaNode,
  FaFigma} from 'react-icons/fa';

import {SiNextdotjs, 
  SiCircleci, 
  SiVercel, 
  SiGooglecloud, 
  SiIbmwatson, 
  SiMongodb} from 'react-icons/si';

export default function CardTwo() {

    // resize icons
    const size = 20

  return (
    <div className='carosoul'>
        <div className='card-title'>
          Moana Kanana
        </div>
            <Carousel className='border'>
                <div>
                    <img src='images/moana-kanana-01.png' alt='' className='carosoul-pic' />
                  
                </div>
                <div>
                    <img src="images/moana-kanana-02.png" alt='' className='carosoul-pic'/>
                  
                </div>
                <div>
                    <img src="images/moana-kanana-03.png" alt='' className='carosoul-pic'/>
                    
                </div>
                <div>
                    <img src="images/moana-kanana-04.png" alt='' className='carosoul-pic'/>
                    
                </div>
            </Carousel>

            <div className='card-description'>
              I worked with Moana Digital and was given this design via Figma to cut up in React and create a simple CMS where the client could change text on specific areas. We created the backend CMS with node.js connected to a MongoDB document.<br/>
              <br/>It was deployed via vercel on <a href='https://moana-kanana.vercel.app/'>Moana-Kanana</a> and I experimented with a static deployment via AWS S3 Bucket with a Circle CI/CD pipeline connected to github repo.
            </div>

            <div className='card-icons'>
              <span className='icon-border'><FaReact size={size}/><br/>React</span>
              <span className='icon-border'><SiCircleci size={size}/><br/>Circle CI/CD</span>
              <span className='icon-border'><FaAws size={size}/><br/>AWS</span>
              <span className='icon-border'><FaGithub size={size}/><br/>Github</span>
              <span className='icon-border'><SiVercel size={size}/><br/>Vercel</span>
              <span className='icon-border'><FaNode size={size}/><br/>Node.js</span>
              <span className='icon-border'><SiMongodb size={size}/><br/>MongoDB</span>
              <span className='icon-border'><FaFigma size={size}/><br/>Figma</span>
            </div>
    </div>
  )
}
