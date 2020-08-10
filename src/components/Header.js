import React, { Component } from 'react';
import '../stylesheets/style.scss';
import ClockContainer from './ClockContainer';
import Quotes from './Quotes';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="wide-text"> Good day, Esther!</h1>
        <ClockContainer />
        <Quotes/>
      </div>
    )
  }
}

export default Header
