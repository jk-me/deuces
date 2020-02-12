import React from 'react'
import Hand from '../components/Hand'
import SessionsContainer from './SessionsContainer'
import SheddedPile from '../components/SheddedPile'
import MessageBox from '../components/MessageBox'
import {connect} from 'react-redux'
import {fetchGames, fetchHand, shuffleDeck, gameWon} from '../actions/gameActions'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


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
    if (h1[0].value < h2[0].value){
      this.props.setFirst('hand1') //return 'hand2'
    }
    else if (h2[0].value < h1[0].value){
      this.props.setFirst('hand2')
    }
    else {
      h1 = h1.filter( el => el.value === h1[0].value).sort((a,b) => suits.indexOf(a.suit) - suits.indexOf(b.suit))
      h2 = h2.filter( el => el.value === h2[0].value).sort((a,b) => suits.indexOf(a.suit) - suits.indexOf(b.suit))
      if (suits.indexOf(h1[0].suit) < suits.indexOf(h2[0].suit))
        { this.props.setFirst('hand1') } //return 'hand2'
      else if (suits.indexOf(h2[0].suit) < suits.indexOf(h1[0].suit))
        { this.props.setFirst('hand2')  }
    }
  } //dispatches setFirst() with 'hand1' or 'hand2'

  newGame = async () =>{
    let session = this.props.current_session.id
    let deckStr = this.props.deck
    if (session){
      await this.props.shuffleDeck(deckStr)
      await this.props.fetchHand(1, deckStr)
      await this.props.fetchHand(2, deckStr)
      //meout(()=>this.props.fetchHand(2, deck), 500)
    }
    let cards = document.getElementsByClassName('card');
    for (const x of cards){
      x.style.visibility = "";
    }
    await this.determineFirst()
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

            <Button className='button' variant='outline-light' onClick={this.newGame}>
              New Game
            </Button>

            <MessageBox />
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

        <div className='quick-start'>
          <div>
            <h5>Quick Start</h5>
            <ul>
              <li>Select a session to continue playing or start a new session. (Sessions track wins/losses)</li>
              <li>'New game' to begin a new game in session.</li>
              <li>Go to ‘About’ to see full play rules</li>
            </ul>
          </div>
        </div>

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
    player: state.player,  //current, 'hand1' or 'hand2'
    last_played: state.last_played, //{play:'' cards:[{card},{card}]}
    winner: state.winner
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    fetchGames: () => dispatch(fetchGames()),
    fetchHand: (playerInt, deckStr) => dispatch(fetchHand(playerInt, deckStr)),
    shuffleDeck: (deckStr) => dispatch(shuffleDeck(deckStr)),
    setFirst: (playerInt) => dispatch({
      type: 'SET_FIRST_PLAYER',
      player: playerInt
    }),
    playTurn: (selected, player, play) => dispatch({
      type: 'PLAY_TURN',
      selected: selected,
      player: player,   //'hand1' or 'hand2'
      play: play     //'single', 'flush'
    }),
    gameWon: (game, id) => dispatch(gameWon(game, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
