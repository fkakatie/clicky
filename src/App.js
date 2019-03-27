import React, { Component } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import './App.css';
import './components/reset.css'
import './components/component.css';

class App extends Component {

  render() {
    return (
      <div>
        
        <Header />

        <Game />

      </div>
    );
  }
}

export default App;
