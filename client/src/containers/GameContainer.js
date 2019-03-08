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
        <HandContainer hand='hand1' hand1={this.props.hand1} playTurn= {this.props.playTurn} last_played= {this.props.last_played}/>
        <HandContainer
          hand='hand2'
          hand2={this.props.hand2}
          playTurn= {this.props.playTurn}
          last_played= {this.props.last_played}
        />
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    hand1: state.hand1,
    hand2: state.hand2,
    current_player: state.current_player,  //0 or 1
    last_played: state.last_played
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    fetchHand: (num) => dispatch(fetchHand(num)),
    shuffle: () => dispatch(shuffleDeck()),
    playTurn: (selected, hand) => dispatch({
      type: 'PLAY_TURN',
      selected: selected,
      player: hand   //hand1 or hand2
      // player: this.props.current_player
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
