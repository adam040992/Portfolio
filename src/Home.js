import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './Home.scss';
import ImgComp from './ImgComp.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i1 from './images/BIURO/main-site.jpg';
import i2 from './images/ŁAZIENKI/łazienkaZ1.jpg';
import i3 from './images/RESTAURACJA/6-min.jpg';
import i4 from './images/ŁAZIENKI/łazienkaB1.jpg';

const text1 = {
  text: 'jakość...',
  top: 23,
  left: 19
}

const text2 = {
  text: 'natura...',
  top: 90,
  left: 60
}

const text3 = {
  text: 'design...',
  top: 92,
  left: 48
}

const text4 = {
  text: 'ponadczasowość...',
  top: 65,
  left: 10
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderArr: [
        <ImgComp src={i1} text={text1.text} top={text1.top} left={text1.left} />,
        <ImgComp src={i2} text={text2.text} top={text2.top} left={text2.left} />,
        <ImgComp src={i3} text={text3.text} top={text3.top} left={text3.left} />,
        <ImgComp src={i4} text={text4.text} top={text4.top} left={text4.left} />],
      x: 0
    }
  }

  componentDidMount() {
    this.IntervalId = setInterval(() => {
      (this.state.x === (-100*(this.state.sliderArr.length-1))) ? this.setState({x: 0}) : this.setState({x: this.state.x -100});
    },5000)
  }

  componentWillUnmount() {
    clearInterval(this.IntervalId);
  }

  goLeft = (e) => {
    (this.state.x === 0) ? this.setState({x: this.state.x-(100*(this.state.sliderArr.length-1))}) : this.setState({x: this.state.x + 100});

  }

  goRight = (e) => {
    (this.state.x === (-100*(this.state.sliderArr.length-1))) ? this.setState({x: 0}) : this.setState({x: this.state.x -100});
  }

  render() {
    return <div className='home-background'>
        <div className='home-banner-text'>
          <div className='slider'>
            {this.state.sliderArr.map((item, index) => {
              return(
                <div key={index} className='slide' style={{transform: `translateX(${this.state.x}%)`}}>
                  {item}
                </div>
              )
            })}
            <button id='goLeft' onClick={this.goLeft}>
              <FontAwesomeIcon className='fa-4x' icon='angle-left' />
            </button>
            <button id='goRight' onClick={this.goRight}>
              <FontAwesomeIcon className='fa-4x' icon='angle-right' />
            </button>
          </div>
        </div>
      </div>
  }
}

export default Home;
