import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class TodoList extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem 
        key={todo.id} 
        todo={todo} 
        isCompleted={this.props.isCompleted}
        deleteItem={this.props.deleteItem}
        />
    ))
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList
