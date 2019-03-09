import React from 'react'
import HandContainer from './HandContainer'
import {connect} from 'react-redux'
import {fetchHand, shuffleDeck} from '../actions/gameActions'
import SheddedPile from '../components/SheddedPile'

class GameContainer extends React.Component{

  componentDidMount(){
    this.props.shuffle()
    this.props.fetchHand(1)
    this.props.fetchHand(2)
  }

  render(){
    return (
      <div>
        <HandContainer player='hand1' hand={this.props.hand1.sort(function(a,b) {return ['3','4','5','6','7','8','9','10','JACK','QUEEN','KING','ACE','2'].indexOf(a.value) - ['3','4','5','6','7','8','9','10','JACK','QUEEN','KING','ACE','2'].indexOf(b.value)} )}
        playTurn= {this.props.playTurn}
        last_played= {this.props.last_played}/>

        <SheddedPile cards={this.props.last_played}/>

        <HandContainer
          player='hand2'
          hand={this.props.hand2}
          playTurn= {this.props.playTurn}
          last_played= {this.props.last_played}
        />
        <p> Your turn: {this.props.player}</p>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    hand1: state.hand1,
    hand2: state.hand2,
    player: state.player,  //hand1 or hand2
    last_played: state.last_played
      //{play:'' cards:[{card},{card}]}
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    fetchHand: (num) => dispatch(fetchHand(num)),
    shuffle: () => dispatch(shuffleDeck()),
    playTurn: (selected, player, play) => dispatch({
      type: 'PLAY_TURN',
      selected: selected,
      player: player,   //hand1 or hand2
      play: play     //'single', 'flush'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
