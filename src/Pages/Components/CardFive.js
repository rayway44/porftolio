
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
  SiPostman, 
  SiMongodb} from 'react-icons/si';


export default function CardFive() {

    // resize icons
  const size = 20

  return (
    <div className='carosoul'>
        <div className='card-title'>
          Weather Check API
        </div>
        <Carousel className='border'>
                <div>
                    <img src='images/weatherApi01.png' alt='' className='carosoul-pic' />
                </div>
                <div>
                <img src='images/weatherApi02.png' alt='' className='carosoul-pic' />
                </div>
                <div>
                <img src='images/weatherApi03.png' alt='' className='carosoul-pic' />
                </div>
                <div>
                <img src='images/weatherApi04.png' alt='' className='carosoul-pic' />
                </div>
            </Carousel>

            <div className='card-description'>
            This is a personal project that I worked on to further understand REST API's where I tested my endpoints with Postman, and then created Serverless Functions for when I deployed to Vercel. I was able to also include a few Node Packages for aspects such as the Location finder auto complete and a geocode locator that returns the Lat and Long coordinates for a location. <br/><br/> 

Be sure to check out the Weather API <a href='https://weather-api-rayway44.vercel.app/'>here</a>
            </div>

            <div className='card-icons'>
              <span className='icon-border'><FaReact size={size}/><br/>React</span>
              
              <span className='icon-border'><SiVercel size={size}/><br/>Vercel</span>
              <span className='icon-border'><FaGithub size={size}/><br/>Github</span>
              <span className='icon-border'><SiPostman size={size}/><br/>Postman</span>
              
              <span className='icon-border'><FaNode size={size}/><br/>Node.js</span>
            </div>
    </div>
  )
}
