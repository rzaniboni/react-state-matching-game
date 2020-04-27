// @ts-nocheck
import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel';
import Board from '../Board';
import { createTiles } from '../../misc/utils';
import './App.css';

class App extends Component {
  state = {
    numTiles: 36,
    playing: false,
    previousTileIndex: null,
    tiles: [],
    toBeCleared: null,
  };
  constructor(props) {
    super(props);
  }

  startGame = (numTiles) => {
    this.setState({
      ...this.state,
      playing: true,
      previousTileIndex: null,
      toBeCleared: null,
    });
    createTiles(this.state.numTiles)
  };

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
