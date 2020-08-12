import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themeColors } from '../../utils/themes';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export class TodoItem extends Component {

  getWrapperStyle = () => {
    return {
      fontSize: '3vh',
      paddingLeft: '10px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    }
  }
  
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getWrapperStyle()}>
        <h4> 
          <Checkbox
            value="checked"
            inputProps={{ 'aria-label': 'Checkbox' }}
            style={checkBoxStyle}
            onChange={this.props.isCompleted.bind(this, id)}
            />
          { title }
          <IconButton 
            aria-label="delete" 
            style={deleteButtonStyle}
            onClick={this.props.deleteItem.bind(this,id)}
            >
            <DeleteIcon/>
           </IconButton>
        </h4>
      </div>
    )
  }
  
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  isCompleted: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
}

const checkBoxStyle = {
  height: 'auto',
  color: themeColors.btn1color,
  float: 'left'
}

const deleteButtonStyle = {
  height: 'auto',
  color: themeColors.btn1color,
  float: 'right'
}

export default TodoItem
