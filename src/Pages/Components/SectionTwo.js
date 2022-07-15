import React, { useRef } from 'react'
import CardOne from './CardOne'
import CardTwo from './CardTwo'
import CardThree from './CardThree'
import CardFour from './CardFour'
import '../css/SectionTwo.css'

export default function SectionTwo() {

  return (
    <div className='section-two-body'>
      <div className='section-two-body-wrapper'>
        <CardOne/>
        <CardTwo/>
        <CardThree />
        <CardFour />
      </div>
    </div>
  )
}
