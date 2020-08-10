import React, { Component } from 'react';
import '../stylesheets/style.scss';
import ClockContainer from './ClockContainer';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1> Good day, Esther!</h1>
        <ClockContainer/>
      </div>
    )
  }
}

export default Header
