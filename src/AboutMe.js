import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './AboutMe.scss';
import photo from './images/ZDJĘCIE/1-min.png';

class AboutMe extends Component {
  render() {
    return <div className='about-background'>
      <div className='about-container'>
        <div className='about-card'>
          <div className='about-text-container'>
            <div className='text-appear'>
              <p>Jestem studentką II roku Architektury Wnętrz na Akademii Sztuk Pięknych im. E. Gepperta we Wrocławiu. Projetuję i tworzę z ogromną pasją i zaangarzowaniem. Inpiruje i motywuje mnie do działania ciągła chęć pogłębiania swojej wiedzy, ciekawość odnośnie nowych rozwiązań i technologii - dzięki temu mój umysł jest otwarty na nowe pomysły i innowacyjne rozwiązania projektowe.</p>
              <br />
              <br />
              <br />
              <p>Jeśli masz jakiekolwiek pytania bądź jesteś zaineterowany spółpracą - zapraszam do kontaktu.</p>
              <br />
              <br />
              <br />
              <p id='sign'>Natalia Piksa</p>
            </div>
          </div>
          <div className='photo-container'>
            <img id='photo-id' src={photo} />
          </div>
        </div>
      </div>
    </div>
  }
}

export default AboutMe;
