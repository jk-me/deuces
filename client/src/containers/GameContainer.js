import React from 'react'
import Hand from '../components/Hand'
import SessionsContainer from './SessionsContainer'
import SheddedPile from '../components/SheddedPile'
import {connect} from 'react-redux'
import {fetchGames, fetchHand, shuffleDeck, gameWon} from '../actions/gameActions'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



class GameContainer extends React.Component{

  componentDidMount(){
    this.props.fetchGames()
  }

  determineFirst = () =>{
    if (this.props.hand1.length === 0 || this.props.hand2.length === 0){return null}
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
  } //dispatches 'hand1' or 'hand2'

  newGame = () =>{
    let deck = this.props.deck
    if (deck){
      this.props.shuffle(deck)
      console.log(deck)
      this.props.fetchHand(1, deck)
      this.props.fetchHand(2, deck)
    }
  }

  showWinner = () =>{
      if (this.props.winner){
        return(<p>Winner: {this.props.winner}</p>)
      }
  }

  render(){
    return (
      <div className='App'>
        <Row>
          <Hand
            player='hand1'
            current={this.props.player}
            hand={this.props.hand1}
            playTurn= {this.props.playTurn}
            last_played= {this.props.last_played}
            gameWon={this.props.gameWon}
            session={this.props.current_session}
          />

          <Col className='center'>
            <SheddedPile cards={this.props.last_played}/>

            <button onClick={this.newGame}>New Game</button>
            <button onClick={this.determineFirst}>Set first player</button>
            <p> Player {this.props.player[4]} turn </p>
            {this.showWinner()}

            <div className='quick-start'>
              <h5>Quick Start</h5>
              <ul>
                <li>Sessions track win/loss data. Select a session to continue playing or start a new session.</li>
                <li>'New game' to draw hands for a new round in session.</li>
                <li>'Set first player' to sort cards in hand and begin play.</li>
                <li>Go to ‘About’ to see full play rules</li>

              </ul>
            </div>
          </Col>

          <Hand
            player='hand2'
            current={this.props.player}
            hand={this.props.hand2}
            playTurn= {this.props.playTurn}
            last_played= {this.props.last_played}
            gameWon={this.props.gameWon}
            session={this.props.current_session}
          />
        </Row>
        <SessionsContainer />
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    current_session: state.current_sess,
    deck: state.deck,
    hand1: state.hand1,
    hand2: state.hand2,
    player: state.player,  //current, hand1 or hand2
    last_played: state.last_played, //{play:'' cards:[{card},{card}]}
    winner: state.winner
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    fetchGames: () => dispatch(fetchGames()),
    fetchHand: (num, deck) => dispatch(fetchHand(num, deck)),
    shuffle: (deck) => dispatch(shuffleDeck(deck)),
    setFirst: (player) => dispatch({
      type: 'SET_FIRST_PLAYER',
      player: player
    }),
    playTurn: (selected, player, play) => dispatch({
      type: 'PLAY_TURN',
      selected: selected,
      player: player,   //hand1 or hand2
      play: play     //'single', 'flush'
    }),
    gameWon: (game, id) => dispatch(gameWon(game, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
