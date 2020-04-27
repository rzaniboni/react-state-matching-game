// @ts-nocheck
import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel';
import Board from '../Board';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.setState({
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null,
    });
  }
  render() {
    const { playing, numTiles } = this.state;
    return (
      <div className="App">
        <header className="App-header">Turbo-Matcher</header>
        <OptionsPanel playing={playing} numTiles={numTiles} />
        <Board numTiles={numTiles} />}
      </div>
    );
  }
}

export default App;
