import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
  render() {
    return <div className='about-background'>
      <div className='about-container'>
        <div className='contact-about-card'>
          <div className='contact-text-container'>

            <div id='right-appear'>
              <p>Serdecznie Zapraszam do Kontaktu</p>
            </div>
          </div>
          <div className='contact-text-container'>
            <div className='contact-bottom'>
            <div>
              <p className='contact-first-elemet left-appear'>Emal</p>
            </div>
            <div>
              <p className='contact-second-element left-appear'>Tel</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Contact;
