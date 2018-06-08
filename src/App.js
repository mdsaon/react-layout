import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Includes/Header';
import Main from './Includes/Main';
import Footer from './Includes/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
