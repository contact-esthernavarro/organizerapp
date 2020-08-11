import React from 'react';
import './App.scss';
import Section from './components/Section'
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
