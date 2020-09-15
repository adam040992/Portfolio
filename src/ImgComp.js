import React, { Component } from 'react';
import ReacDOM from 'react-dom';
import './ImgComp.scss';

class ImgComp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className='imgCompDiv' style={{backgroundImage:`url(${this.props.src})`}} id='slider-styles'>
      <h1 className='imgComptext' style={{left: `${this.props.left}%`, top: `${this.props.top}%`, position: 'relative'}}>{this.props.text}</h1>
    </div>
  }
}

export default ImgComp;
