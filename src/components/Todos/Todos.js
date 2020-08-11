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

  isCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if(item.id === id){
          item.completed = !item.completed;
        }
        return item;
      })
    })
  }

  deleteItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((item) => {
        return item.id !== id
      })]
    })
  }

  render() {
    
    return (
      <div>
        <TodoList 
          todos={this.state.todos} 
          isCompleted={this.isCompleted}
          deleteItem={this.deleteItem}
        />
      </div>
    )
  }
}

export default Todos
