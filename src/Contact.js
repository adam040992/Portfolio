import React, { Component } from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <div className='contact-text-container contact-text-bottom-container'>
            <div className='contact-bottom'>
              <div className='contact-table'>
                <div className='contact-table-email big-screen-left left-appear'>
                  <FontAwesomeIcon className='fa-2x iconColor' icon={['fas', 'envelope-open']}/>
                </div>
                <div className='contact-table-email big-screen-right'>
                  <p className='contact-first-elemet right-appear'>Natalia@gmail.com</p>
                </div>
              </div>
              <div className='contact-table'>
                <div className='contact-table-email left-appear'>
                  <FontAwesomeIcon className='fa-2x iconColor' icon='mobile-alt'/>
                </div>
                <div className='contact-table-email'>
                  <p className='contact-first-elemet right-appear'>123 456 789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Contact;
