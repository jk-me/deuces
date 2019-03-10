import React, { Component } from 'react';
import './App.css';
// import {connect} from 'react-redux'
import GameContainer from './containers/GameContainer'
import SessionsContainer from './containers/SessionsContainer'

class App extends Component {

  // componentDidMount(){
  // }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <SessionsContainer />
        <GameContainer />
      </div>
    );
  }
}

export default App;
