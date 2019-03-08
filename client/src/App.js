import React, { Component } from 'react';
import './App.css';
// import {connect} from 'react-redux'
import GameContainer from './containers/GameContainer'

class App extends Component {

  // componentDidMount(){
  // }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <GameContainer />
      </div>
    );
  }
}

export default App;
