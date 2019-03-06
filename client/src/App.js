import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {hand: []}

  componentDidMount(){
    fetch('https://deckofcardsapi.com/api/deck/b3wse340ezeb/draw/?count=13')
      .then(resp => resp.json())
      .then(data => this.setState({hand: data.cards}))
  }

  renderHand = () =>{
    return this.state.hand.map( card => {return <li>{card.code}</li>})
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <ul>
          {this.renderHand()}
        </ul>

      </div>
    );
  }
}

export default App;
