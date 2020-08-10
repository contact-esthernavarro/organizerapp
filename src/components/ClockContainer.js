import React, { Component } from 'react';
import { themeColors, themeFonts } from '../utils/themes';
import '../stylesheets/style.scss';
 
export class ClockContainer extends Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    setInterval(
      () =>  this.setState({ date: new Date() })
    , 1000);
  }
 
  render() {
    return (
      <div style={{color: themeColors.f2color, fontFamily: themeFonts.f1font, fontSize: '30px'}}>
        <p> 
        <span style={{ padding: '20px'}}> 
          { this.state.date.toLocaleDateString('en-US',{ weekday: 'long', month: 'long', day: 'numeric' }) } 
        </span>
          { this.state.date.toLocaleTimeString() } 
        </p>
      </div>
    );
  }  
}

export default ClockContainer