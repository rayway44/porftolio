import React from 'react'
import '../css/ValidatorMessage.css'

export default function SuccessMessage(props) {
  return (
    <div className="success">
        Hey {props.name}, thanks for getting in touch.<br/><br/>
        Ill be back in contact soon
    </div>
  )
}
