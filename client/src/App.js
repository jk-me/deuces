import React, { Component } from 'react';
import './App.css';
import GameContainer from './containers/GameContainer'
import About from './components/About'
import SessionInfo from './components/SessionInfo'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <>
          <NavBar />
          <Route exact path='/' render={() => <GameContainer/>} />
          <Route exact path='/about' render={() =><About/>} />
          <Route exact path='/game_data' render={() =><SessionInfo/>} />
        </>
      </Router>
    );
  }
}


export default App;
