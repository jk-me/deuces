import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {fetchHand, shuffleDeck} from './actions/gameActions'
import Card from './components/Card'

class App extends Component {

  componentDidMount(){
    this.props.shuffle()
    this.props.fetchHand(1)
    this.props.fetchHand(2)

  }

  renderHand = (hnum) =>{
    return this.props[hnum].map( card => {return <Card image={card.image}/>})
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <ul>
          {this.renderHand('hand1')}
        </ul>
        <ul>
          {this.renderHand('hand2')}
        </ul>

      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {hand1: state.hand1, hand2: state.hand2}
}

const mapDispatchToProps = dispatch =>{
  return {
    fetchHand: (num) => dispatch(fetchHand(num)),
    shuffle: () => dispatch(shuffleDeck())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
