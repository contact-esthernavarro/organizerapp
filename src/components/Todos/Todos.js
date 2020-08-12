import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoPost from './TodoPost';
import axios from 'axios';

export class Todos extends Component {
  state = {
    todos: []
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        this.setState({
          todos: [...this.state.todos.filter((item) => {
            return item.id !== id
          })]
        })
      })
  }

  addItem = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then((response) => {
        this.setState({
          todos: [...this.state.todos, response.data]
        })
      })
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=7')
      .then((response) => {
        this.setState({
          todos: response.data
        })
      })
  }

  render() {
    return (
      <div>
        <TodoPost
          addItem={this.addItem}
        />
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
