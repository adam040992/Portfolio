import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { storage } from './firebase';
import './Portfolio.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import salon1 from './images/SALON/4b-min.jpg';
import salon2 from './images/SALON/5A-min.jpg';
import salon3 from './images/SALON/6A-min.jpg';
import salon4 from './images/SALON2/3bb-min.jpg';
import salon5 from './images/SALON2/7a-min.jpg';

import biuro1 from './images/BIURO/1-min.jpg';
import biuro2 from './images/BIURO/2-min.jpg';
import biuro3 from './images/BIURO/3-min.jpg';
import biuro4 from './images/BIURO/4-min.jpg';
import biuro5 from './images/BIURO/5-min.jpg';
import biuro6 from './images/BIURO/6-min.jpg';
import biuro11 from './images/BIURO/11-min.jpg';
import biuro8 from './images/BIURO/8-min.jpg';
import biuro9 from './images/BIURO/9-min.jpg';
import biuro10 from './images/BIURO/10-min.jpg';

import restauracja1 from './images/RESTAURACJA/1-min.jpg';
import restauracja2 from './images/RESTAURACJA/2-min.jpg';
import restauracja3 from './images/RESTAURACJA/3-min.jpg';
import restauracja4 from './images/RESTAURACJA/4-min.jpg';
import restauracja5 from './images/RESTAURACJA/5-min.jpg';
import restauracja6 from './images/RESTAURACJA/6-min.jpg';
import restauracja7 from './images/RESTAURACJA/7-min.jpg';
import restauracja8 from './images/RESTAURACJA/8-min.jpg';

import garderoba1 from './images/GARDEROBA/1-min.png';
import garderoba2 from './images/GARDEROBA/garderoba2-min.png';
import garderoba3 from './images/GARDEROBA/garderoba3-min.png';
import garderoba4 from './images/GARDEROBA/garderoba4-min.png';

import kurtyny1 from './images/KURTYNY/kurtyna1-min.png';
import kurtyny2 from './images/KURTYNY/kurtyna2-min.png';
import kurtyny3 from './images/KURTYNY/kurtyna3-min.png';
import kurtyny4 from './images/KURTYNY/kurtyna4-min.png';
import kurtyny5 from './images/KURTYNY2/kurtyna5-min.jpg';
import kurtyny6 from './images/KURTYNY2/kurtyna6-min.jpg';

import lazienka1 from './images/ŁAZIENKI/łazienkaB1.jpg';
import lazienka2 from './images/ŁAZIENKI/łazienkaB2.jpg';
import lazienka3 from './images/ŁAZIENKI/łazienkaB3.jpg';
import lazienka4 from './images/ŁAZIENKI/łazienkaZ1.jpg';
import lazienka5 from './images/ŁAZIENKI/łazienkaZ2.jpg';
import lazienka6 from './images/ŁAZIENKI/łazienkaZ3.jpg';
import lazienka7 from './images/ŁAZIENKI/ekspresja1-min.jpg';
import lazienka8 from './images/ŁAZIENKI/ekspresja2-min.jpg';
import lazienka9 from './images/ŁAZIENKI/ekspresja3-min.jpg';


import toaletka1 from './images/TOALETKA/1.jpg';
import toaletka2 from './images/TOALETKA/2.jpg';
import toaletka3 from './images/TOALETKA/plansza_Piksa.jpg';

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      salon: 'none',
      biuro: 'none',
      restauracja: 'none',
      garderoba: 'none',
      toaletka: 'none',
      kurtyny: 'none',
      lazienki: 'none',
      meble: 'none',

      salonTip: false,
      biuroTip: false,
      restauracjaTip: false,
      garderobaTip: false,
      toaletkaTip: false,
      kurtynyTip: false,
      lazienkiTip: false,
      mebleTip: false,

      meble_elements: [
        garderoba1,
        garderoba2,
        garderoba3,
        garderoba4,
        toaletka1,
        toaletka2,
        toaletka3
      ],

      toaletka_elements: [
        toaletka1,
        toaletka2,
        toaletka3
      ],
      lazienki_elements: [
        lazienka1,
        lazienka2,
        lazienka3,
        lazienka4,
        lazienka5,
        lazienka6,
        lazienka7,
        lazienka8,
        lazienka9,
      ],
      biuro_elements: [
        biuro1,
        biuro2,
        biuro3,
        biuro4,
        biuro5,
        biuro6,
        biuro11,
        biuro8,
        biuro9,
        biuro10
      ],
      salon_elements: [
        salon1,
        salon2,
        salon3,
        salon4,
        salon5
      ],
      restauracja_elements: [
        restauracja1,
        restauracja2,
        restauracja3,
        restauracja4,
        restauracja5,
        restauracja6,
        restauracja7,
        restauracja8,
      ],
      garderoba_elements: [
        garderoba1,
        garderoba2,
        garderoba3,
        garderoba4
      ],
      kurtyny_elements: [
        kurtyny1,
        kurtyny2,
        kurtyny3,
        kurtyny4,
        kurtyny5,
        kurtyny6
      ],
      modal: false,
      target: ''
    }
  }



  OpenSalon = (e) => {
    this.setState({salon: 'block'});
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  OpenBiuro = (e) => {
    this.setState({biuro: 'block'});
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  OpenRestauracja = (e) => {
    this.setState({restauracja: 'block'});
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  OpenGarderoba = (e) => {
    this.setState({garderoba: 'block'});
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  OpenToaletka = (e) => {
    this.setState({toaletka: 'block'});
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  OpenKurtyny = (e) => {
    this.setState({kurtyny: 'block'});
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  OpenLazienki = (e) => {
    this.setState({lazienki: 'block'});
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  OpenMeble = (e) => {
    this.setState({meble: 'block'});
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  ShowModal = (e) => {
    this.setState({modal: !this.state.modal});
    this.setState({target: e.target.src});
  }

  ShowTip = (e) => {
    this.setState({salonTip: !this.state.salonTip});
    this.setState({biuroTip: !this.state.biuroTip});
    this.setState({restauracjaTip: !this.state.restauracjaTip});
    this.setState({garderobaTip: !this.state.garderobaTip});
    this.setState({toaletkaTip: !this.state.toaletkaTip});
    this.setState({kurtynyTip: !this.state.kurtynyTip});
    this.setState({lazienkiTip: !this.state.lazienkiTip});
    this.setState({mebleTip: !this.state.mebleTip});
  console.log(this.state.salonTip)
  }


  Close = (e) => {
    this.setState({
      salon: 'none',
      biuro: 'none',
      restauracja: 'none',
      garderoba: 'none',
      toaletka: 'none',
      kurtyny: 'none',
      lazienki: 'none',
      meble: 'none',

      salonTip: false,
      biuroTip: false,
      restauracjaTip: false,
      garderobaTip: false,
      toaletkaTip: false,
      kurtynyTip: false,
      lazienkiTip: false,
      mebleTip: false,
    })
  }


  render() {
    return <div className='portfolio-background'>
      <div className ='portfolio-container'>


        <div className='portfolo-card' onClick={this.OpenSalon}>
          <div className='img-effect' id='salon-image'>
            <div className='portfolio-text-container-1'>
              <h1 className='min-h1'>Salon</h1>
            </div>
          </div>
        </div>
        <div className='show-photos salon-photos' style={{display: this.state.salon}}>
          <div className='show-photos-container'>
            <div className ='title-container'>
              <div className='show-photos-container-title'>
                <h1>Salon</h1>
              </div>
              <div className='button-container'>
                <FontAwesomeIcon className='fa-2x' icon='info-circle' onClick={this.ShowTip} />
                <div className='salonTip' style={{display: this.state.salonTip? 'block' : 'none'}}>
                  <p>projekt stworzony w ramach zajęć na ASP  im. E. Gepperta we Wrocławiu pod okiem mgr Arch. inż. Aleksandra Przybyły</p>
                  <p>semestr IV | 2020</p>
                </div>
              </div>
              <div className='button-container'>
                <button className='closingButton' onClick={this.Close}><FontAwesomeIcon className='fa-3x' icon='times'/></button>
              </div>
            </div>
            <div className='salon-photos-container'>
              <div className='flex-container'>
                {this.state.salon_elements.map((salon_element, index) => <div key={index} className='img-box-container img-effect' onClick={this.ShowModal}><img src={salon_element} className='container-images'/></div>)}
              </div>
            </div>
          </div>
          <div className='modal' onClick={this.ShowModal} style={{display: this.state.modal ? 'block' : 'none'}}>
            <div style={{backgroundImage: `url(${this.state.target})`}} className='full-img'>
            </div>
          </div>
        </div>


        <div className='portfolo-card' onClick={this.OpenBiuro}>
          <div className='img-effect' id='biuro-image'>
            <div className='portfolio-text-container-1'>
              <h1 className='min-h1'>Biuro</h1>
            </div>
          </div>
        </div>
        <div className='show-photos salon-photos' style={{display: this.state.biuro}}>
          <div className='show-photos-container'>
            <div className ='title-container'>
              <div className='show-photos-container-title'>
                <h1>Biuro</h1>
              </div>
              <div className='button-container'>
                <FontAwesomeIcon className='fa-2x' icon='info-circle' onClick={this.ShowTip} />
                <div className='salonTip' style={{display: this.state.biuroTip? 'block' : 'none'}}>
                  <p>projekt stworzony w ramach zajęć na ASP  im. E. Gepperta we Wrocławiu pod okiem dr. Hab. Jacka Krzysztofa Żurka</p>
                  <p>semestr IV | 2020</p>
                </div>
              </div>
              <div className='button-container'>
                <button className='closingButton' onClick={this.Close}><FontAwesomeIcon className='fa-3x' icon='times'/></button>
              </div>
            </div>
            <div className='salon-photos-container'>
              <div className='flex-container'>
                {this.state.biuro_elements.map((biuro_element, index) => <div key={index} className='img-box-container img-effect' onClick={this.ShowModal}><img src={biuro_element} className='container-images'/></div>)}
              </div>
            </div>
          </div>
          <div className='modal' onClick={this.ShowModal} style={{display: this.state.modal ? 'block' : 'none'}}>
            <div style={{backgroundImage: `url(${this.state.target})`}} className='full-img'>
            </div>
          </div>
        </div>


        <div className='portfolo-card' onClick={this.OpenRestauracja}>
          <div className='img-effect' id='restauracja-image'>
            <div className='portfolio-text-container-1'>
              <h1 className='min-h1'>Restauracja</h1>
            </div>
          </div>
        </div>
        <div className='show-photos salon-photos' style={{display: this.state.restauracja}}>
          <div className='show-photos-container'>
            <div className ='title-container'>
              <div className='show-photos-container-title'>
                <h1>Restauracja</h1>
              </div>
              <div className='button-container'>
                <FontAwesomeIcon className='fa-2x' icon='info-circle' onClick={this.ShowTip} />
                <div className='salonTip' style={{display: this.state.restauracjaTip? 'block' : 'none'}}>
                  <p>projekt stworzony w ramach zajęć na ASP  im. E. Gepperta we Wrocławiu pod okiem dr. Hab. Jacka Krzysztofa Żurka</p>
                  <p>semestr III | 2020</p>
                </div>
              </div>
              <div className='button-container'>
                <button className='closingButton' onClick={this.Close}><FontAwesomeIcon className='fa-3x' icon='times'/></button>
              </div>
            </div>
            <div className='salon-photos-container'>
              <div className='flex-container'>
                {this.state.restauracja_elements.map((restauracja_element, index) => <div key={index} className='img-box-container img-effect' onClick={this.ShowModal}><img src={restauracja_element} className='container-images'/></div>)}
              </div>
            </div>
          </div>
          <div className='modal' onClick={this.ShowModal} style={{display: this.state.modal ? 'block' : 'none'}}>
            <div style={{backgroundImage: `url(${this.state.target})`}} className='full-img'>
            </div>
          </div>
        </div>


        <div className='portfolo-card' onClick={this.OpenKurtyny}>
          <div className='img-effect' id='kurtyny-image'>
            <div className='portfolio-text-container-1'>
              <h1 className='min-h1'>Kurtyny</h1>
            </div>
          </div>
        </div>
        <div className='show-photos salon-photos' style={{display: this.state.kurtyny}}>
          <div className='show-photos-container'>
            <div className ='title-container'>
              <div className='show-photos-container-title'>
                <h1>Kurtyny</h1>
              </div>
              <div className='button-container'>
                <FontAwesomeIcon className='fa-2x' icon='info-circle' onClick={this.ShowTip} />
                <div className='salonTip' style={{display: this.state.kurtynyTip? 'block' : 'none'}}>
                  <p>projekt stworzony na konkurs na kurtyny zamgławiające w Oławie. Dwa z trzech projektów zostały nagrodzone I miejscem oraz wyróżnieniem.</p>
                </div>
              </div>
              <div className='button-container'>
                <button className='closingButton' onClick={this.Close}><FontAwesomeIcon className='fa-3x' icon='times'/></button>
              </div>
            </div>
            <div className='salon-photos-container'>
              <div className='flex-container'>
                {this.state.kurtyny_elements.map((kurtyny_element, index) => <div key={index} className='img-box-container img-effect' onClick={this.ShowModal}><img src={kurtyny_element} className='container-images'/></div>)}
              </div>
            </div>
          </div>
          <div className='modal' onClick={this.ShowModal} style={{display: this.state.modal ? 'block' : 'none'}}>
            <div style={{backgroundImage: `url(${this.state.target})`}} className='full-img'>
            </div>
          </div>
        </div>


        <div className='portfolo-card' onClick={this.OpenLazienki}>
          <div className='img-effect' id='lazienki-image'>
            <div className='portfolio-text-container-1'>
              <h1 className='min-h1'>Łazienki</h1>
            </div>
          </div>
        </div>
        <div className='show-photos salon-photos' style={{display: this.state.lazienki}}>
          <div className='show-photos-container'>
            <div className ='title-container'>
              <div className='show-photos-container-title'>
                <h1>Łazienki</h1>
              </div>
              <div className='button-container'>
                <FontAwesomeIcon className='fa-2x' icon='info-circle' onClick={this.ShowTip} />
                <div className='salonTip' style={{display: this.state.lazienkiTip? 'block' : 'none'}}>
                  <p>Projekt Własny</p>
                  <p>Rok 2020</p>
                </div>
              </div>
              <div className='button-container'>
                <button className='closingButton' onClick={this.Close}><FontAwesomeIcon className='fa-3x' icon='times'/></button>
              </div>
            </div>
            <div className='salon-photos-container'>
              <div className='flex-container'>
                {this.state.lazienki_elements.map((lazienki_element, index) => <div key={index} className='img-box-container img-effect' onClick={this.ShowModal}><img src={lazienki_element} className='container-images'/></div>)}
              </div>
            </div>
          </div>
          <div className='modal' onClick={this.ShowModal} style={{display: this.state.modal ? 'block' : 'none'}}>
            <div style={{backgroundImage: `url(${this.state.target})`}} className='full-img'>
            </div>
          </div>
        </div>


        <div className='portfolo-card' onClick={this.OpenMeble}>
          <div className='img-effect' id='garderoba-image'>
            <div className='portfolio-text-container-1'>
              <h1 className='min-h1'>Meble</h1>
            </div>
          </div>
        </div>
        <div className='show-photos salon-photos' style={{display: this.state.meble}}>
          <div className='show-photos-container'>
            <div className ='title-container'>
              <div className='show-photos-container-title'>
                <h1>Meble</h1>
              </div>
              <div className='button-container'>
                <FontAwesomeIcon className='fa-2x' icon='info-circle' onClick={this.ShowTip} />
                <div className='salonTip' style={{display: this.state.mebleTip? 'block' : 'none'}}>
                  <p>projekty stworzony w ramach zajęć na ASP  im. E. Gepperta we Wrocławiu pod okiem mgr Magdaleny Kasprzycy</p>
                  <p>sem II i III | 2019/2020</p>
                </div>
              </div>
              <div className='button-container'>
                <button className='closingButton' onClick={this.Close}><FontAwesomeIcon className='fa-3x' icon='times'/></button>
              </div>
            </div>
            <div className='salon-photos-container'>
              <div className='flex-container'>
                {this.state.meble_elements.map((meble_element, index) => <div key={index} className='img-box-container img-effect' onClick={this.ShowModal}><img src={meble_element} className='container-images'/></div>)}
              </div>
            </div>
          </div>
          <div className='modal' onClick={this.ShowModal} style={{display: this.state.modal ? 'block' : 'none'}}>
            <div style={{backgroundImage: `url(${this.state.target})`}} className='full-img'>
            </div>
          </div>
        </div>






      </div>
    </div>
  }
}

export default Portfolio;
