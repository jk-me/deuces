import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {fetchHand} from './actions/gameActions'

class App extends Component {

  componentDidMount(){
    this.props.fetchHand()
      debugger
    // fetch('https://deckofcardsapi.com/api/deck/b3wse340ezeb/draw/?count=13')
    //   .then(resp => resp.json())
    //   .then(data => this.setState({hand: data.cards}))
  }

  renderHand = () =>{
    return this.props.hand.map( card => {return <li>{card.code}</li>})
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

const mapStateToProps = state =>{
  return {hand: state.hand}
}

const mapDispatchToProps = dispatch =>{
  return {fetchHand: () => dispatch(fetchHand())}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
