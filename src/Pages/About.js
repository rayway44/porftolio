import React, {useState,useEffect} from 'react'
import axios from 'axios'
import WarningError from './Components/WarningError'
import SuccessMessage from './Components/SuccessMessage'

import styles from './css/About.module.css'
import './css/Modal.css'

export default function About() {

  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState();

    const formValidator = (e) => {
      e.preventDefault();

      const firstName = document.getElementById('firstName').value
      const lastName = document.getElementById('lastName').value
      const subject = document.getElementById('subject').value
      const message = document.getElementById('message').value
    
      if(firstName === '' || lastName === '' || subject === '') {

        console.log('fields empty')
        setMessage(<WarningError/>)
        
      } else {

        console.log('fields filled')
        setMessage(<SuccessMessage name={firstName} />)

        // vercel serverless
        axios.post(`/ray`,{
          fName: firstName,
          lName: lastName,
          subject: subject,
          message: message,
        })
        .then(res => {
          console.log(res)
        })
        
        setTimeout(toggleModal, 3000);
      }

      console.log(firstName, lastName, subject, message)
    }

    const toggleModal = () => {
      setMessage('')
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }


  return (
    <div className={styles.aboutBody}>
      <div className={styles.aboutContent}>
        <span className={styles.aboutName}>About Me</span>
        <span>Cliche to say, ‘I want to make a difference and inspire the next generation’<br/><br/>

Im always looking to learn, help, inspire and create. Having done a lot of time with Hospitality I wanted to branch out to the I.T sector and have discovered all the further opportunities and how I can bring this knowledge to help the people around me.<br/><br/>

Have a passion of creating anything web related from web applications to static sites and even PWA using React at its core and backing that up with Node.js/Express and deploying to cloud services such as GCP, AWS or IBM all with a CI/CD Pipeline.<br/><br/>

Can work in Waterfall methodology but ideally prefer Agile however can adapt in any situations remaining calm under pressure and loving a challenge</span>
        <span>Get in touch and lets get creating</span>

        <span>
        <div onClick={toggleModal} className="btn-modal">
          CONTACT
        </div>
        </span>
        
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <span className='modal-content-title'>get in touch</span>
                <form className='form-styling'  >
                  <input type="text" id='firstName' placeholder="first name" className='input-styling' required/>
                  <input type="text" id='lastName' placeholder="last name" className='input-styling'/>
                  <input type="text" id='subject' placeholder="subject" className='input-styling'/>
                  <textarea id='message' className='textarea-styling'>Tell us whats on your mind. . . </textarea>
                  <div onClick={formValidator} className='modal-submit-button'>SUBMIT</div>
                  <div className='modal-warning-message' >
                    {message}
                  </div>
                </form>

              <div className="close-modal" onClick={toggleModal}>
                CLOSE
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
