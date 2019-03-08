import React from 'react'
import HandContainer from './HandContainer'
import {connect} from 'react-redux'
import {fetchHand, shuffleDeck} from '../actions/gameActions'


class GameContainer extends React.Component{

  componentDidMount(){
    this.props.shuffle()
    this.props.fetchHand(1)
    this.props.fetchHand(2)
  }

  render(){
    return (
      <div>
        <HandContainer hand='hand1' hand1={this.props.hand1}/>
        <HandContainer hand='hand2' hand2={this.props.hand2}/>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    hand1: state.hand1,
    hand2: state.hand2,
    current_player: state.current_player,
    last_played: state.last_played
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    fetchHand: (num) => dispatch(fetchHand(num)),
    shuffle: () => dispatch(shuffleDeck())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
