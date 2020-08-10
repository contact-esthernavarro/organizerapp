import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/style.scss';

export class Quotes extends Component {
  state = {
    quote: '',
    author: '',
    randomNum: Math.floor(Math.random() * Math.floor(1000))
  }

  componentDidMount() {

    axios.get("https://type.fit/api/quotes")
      .then((response) => {
        let num = this.state.randomNum;
        console.log(response.data[num])
        this.setState({ quote: response.data[num]['text']});
        this.setState({ author: response.data[num]['author']});
      })
      .catch((error) => {
        console.log(error);
      });

  }

  render() {
    return ( 
    <div className="quotes">
      <p> "{this.state.quote}" <span> -{this.state.author} </span></p>
     </div>
    )
  }
}

export default Quotes