import React, { Component } from 'react';
import logo from './logo.svg';
import About from './About.js';
import Stateless from './Stateless.js';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Stateless name={"Home"} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <About name= {"Bernie Saners"} initialAge = {74} hobbies= {['fun','jump','swim']}>
          <code>Now that's pretty cool, no</code>
        </About>
     
      </div>
    );
  }
}

export default App;
