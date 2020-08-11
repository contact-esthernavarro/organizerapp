import React, { Component } from 'react';
import TodoList from './TodoList';

export class Todos extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Study GraphQL',
        completed: false
      },
      {
        id: 2,
        title: 'Polish Landing Page',
        completed: false
      },
      {
        id: 3,
        title: 'Review Organizer Notes',
        completed: false
      },
    ]
  }

  render() {
    
    return (
      <div>
        <h4>Todos here</h4>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default Todos
