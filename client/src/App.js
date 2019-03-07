import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {fetchHand, shuffleDeck} from './actions/gameActions'
import HandContainer from './containers/HandContainer'

class App extends Component {

  componentDidMount(){
    this.props.shuffle()
    this.props.fetchHand(1)
    this.props.fetchHand(2)

  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <HandContainer hand='hand1' hand1={this.props.hand1}/>
        <HandContainer hand='hand2' hand2={this.props.hand2}/>


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
