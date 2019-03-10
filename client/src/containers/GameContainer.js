import React from 'react'
import Hand from '../components/Hand'
import SheddedPile from '../components/SheddedPile'
import {connect} from 'react-redux'
import {fetchGames, fetchHand, shuffleDeck} from '../actions/gameActions'

class GameContainer extends React.Component{

  componentDidMount(){
    this.props.fetchGames()
  }

  determineFirst = () =>{
    let nums = ['3','4','5','6','7','8','9','10','JACK','QUEEN','KING','ACE','2']
    let suits = ['DIAMONDS', 'CLUBS', 'HEARTS', 'SPADES']
    let h1 = this.props.hand1.sort((a,b) => nums.indexOf(a.value) - nums.indexOf(b.value))
    let h2 = this.props.hand2.sort((a,b) => nums.indexOf(a.value) - nums.indexOf(b.value))
    if (h1[0].value < h2[0].value)
      { this.props.setFirst('hand1') } //return 'hand2'
    else if (h2[0].value < h1[0].value)
      { this.props.setFirst('hand2')  }
    else {
      h1 = h1.filter( el => el.value === h1[0].value).sort((a,b) => suits.indexOf(a.suit) - suits.indexOf(b.suit))
      h2 = h2.filter( el => el.value === h2[0].value).sort((a,b) => suits.indexOf(a.suit) - suits.indexOf(b.suit))
      if (suits.indexOf(h1[0].suit) < suits.indexOf(h2[0].suit))
        { this.props.setFirst('hand1') } //return 'hand2'
      else if (suits.indexOf(h2[0].suit) < suits.indexOf(h1[0].suit))
        { this.props.setFirst('hand2')  }
    }
  } //returns 'hand1' or 'hand2'

  newGame = () =>{
    let deck = this.props.deck
    this.props.shuffle()
    console.log(deck)
    this.props.fetchHand(1, deck)
    this.props.fetchHand(2, deck)
  }

  render(){
    return (
      <div>
        <Hand
         player='hand1'
         current={this.props.player}
         hand={this.props.hand1}
         playTurn= {this.props.playTurn}
         last_played= {this.props.last_played}/>

        <SheddedPile cards={this.props.last_played}/>

        <Hand
          player='hand2'
          current={this.props.player}
          hand={this.props.hand2}
          playTurn= {this.props.playTurn}
          last_played= {this.props.last_played}
        />
        <p> Your turn: {this.props.player} </p>
        <p> Playing session: {this.props.deck_id} </p>

        <button onClick={this.newGame}>New Game</button>
        <button onClick={this.determineFirst}>Set first player</button>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    deck_id: state.deck_id,
    deck: state.deck,
    hand1: state.hand1,
    hand2: state.hand2,
    player: state.player,  //hand1 or hand2
    last_played: state.last_played //{play:'' cards:[{card},{card}]}
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    fetchGames: () => dispatch(fetchGames()),
    fetchHand: (num, deck) => dispatch(fetchHand(num, deck)),
    shuffle: () => dispatch(shuffleDeck()),
    setFirst: (player) => dispatch({
      type: 'SET_FIRST_PLAYER',
      player: player
    }),
    playTurn: (selected, player, play) => dispatch({
      type: 'PLAY_TURN',
      selected: selected,
      player: player,   //hand1 or hand2
      play: play     //'single', 'flush'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
