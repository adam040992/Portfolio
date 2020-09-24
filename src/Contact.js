import React, { Component } from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
  render() {
    return <div className='about-background'>
      <div className='about-container'>
        <div className='contact-about-card'>
          <div className='contact-text-container'>
            <div className='contact-photo-container'>
              <div id='right-appear'>
                  <p>Wspólnie zaprojektujmy Twoje marzenia</p>
                </div>
            </div>
          </div>
          <div className='contact-text-container contact-text-bottom-container'>
            <div className='contact-bottom'>
              <div className='contact-table'>
                <p id='contact-text-info' className='right-appear'>NAPISZ LUB ZADZWOŃ</p>
              </div>
              <div className='contact-table'>
                <div id='email-element' className='contact-table-container'>
                  <div className='contact-table-email big-screen-left left-appear'>
                    <FontAwesomeIcon className='fa-2x iconColor' icon={['fas', 'envelope-open']}/>
                  </div>
                  <div className='contact-table-email big-screen-right'>
                    <p className='contact-first-elemet right-appear'>
                      <a href="mailto:piksanat@gmail.com">piksanat@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='contact-table'>
                <div id='phone-element' className='contact-table-container'>
                  <div className='contact-table-email left-appear'>
                    <FontAwesomeIcon className='fa-2x iconColor' icon='mobile-alt'/>
                  </div>
                  <div className='contact-table-email'>
                    <p className='contact-first-elemet right-appear'>
                      <a href="tel:+48722128666">722 128 666</a>
                    </p>
                  </div>
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
