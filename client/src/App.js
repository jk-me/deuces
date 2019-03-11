import React, { Component } from 'react';
import './App.css';
import GameContainer from './containers/GameContainer'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {

  // componentDidMount(){
  // }

  render() {
    // console.log(this.state)
    // return (
    //     <>
    //       <GameContainer/>
    //
    //     </>
    // );
    return (
      <Router>
        <>
          <Route path='/' render={() => <GameContainer/>} />

        </>
      </Router>
    );
  }
}
// <Route exact path='/about' render{() =><About/>} />
// <Route path='/session_info' render{() =><SessionInfo/>} />

export default App;
