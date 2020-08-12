import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themeColors, themeFonts } from '../../utils/themes';

export class TodoPost extends Component {

  state = { title : '' }

  onInput = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input 
          type="text" 
          aria-label="input task" 
          name="title" 
          placeholder="Enter your task here"
          style={inputStyle}
          value={this.state.title}
          onChange={this.onInput}
          />
        <button 
          type="submit"
          aria-label="add task"
          style={btnStyle}
          >
            Add
          </button>
      </form>
    )
  }
}

const inputStyle = {
  height: '40px',
  width: '90%',
  backgroundColor: themeColors.f5color,
  color: themeColors.f2color,
  borderRadius: '5px',
  fontFamily: themeFonts.f4font,
  fontSize: '2vh'
}

const btnStyle = {
  fontFamily: themeFonts.f1font,
  fontSize: '2vw',
  backgroundColor: themeColors.btn1color,
}

TodoPost.propTypes = {
  title: PropTypes.string,
  addItem: PropTypes.func.isRequired
}


export default TodoPost
