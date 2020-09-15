import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';
import './HomeView.scss';
import Home from './Home.js';
import AboutMe from './AboutMe.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';

class HomeView extends Component {
  render() {
    return  <HashRouter>
    <div className='home-background'>
      <div className='Menu-container'>
        <div className='menu'>
          <ul>
            <li><NavLink exact to='/'>HOME</NavLink></li>
            <li><NavLink exact to='/portfolio'>PORTFOLIO</NavLink></li>
            <li><NavLink exact to='/aboutMe'>O MNIE</NavLink></li>
            <li><NavLink exact to='/contact'>KONTAKT</NavLink></li>
          </ul>
        </div>
        <div className='logo-container'>
          <div className='logo'></div>
        </div>
      </div>
      <div className='text-container'>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/aboutMe' component={AboutMe} />
      <Route path='/contact' component={Contact} />
      </Switch>
      </div>
    </div>
    </HashRouter>
  }
}

export default HomeView;
