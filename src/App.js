import React, { Component } from 'react';
import Game from './components/Game';
import './App.css';
import './components/reset.css'
import './components/component.css';

class App extends Component {

  state = {
    chosen: false
  }

  render() {
    return (
      <div>

        <Game />

      </div>
    );
  }
}

export default App;
