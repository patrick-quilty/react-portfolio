import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Headshot from './Headshot/Headshot';
import Main from './Main/Main';
import Contact from './Contact/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Headshot />
        <Main />
        <Contact />
      </div>
    );
  }
}

export default App;
