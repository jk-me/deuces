import React from 'react'
import Session from '../components/Session'
import {connect} from 'react-redux'
import {saveDeck} from '../actions/gameActions'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

class SessionsContainer extends React.Component{

  sClick = (session) =>{
    this.props.setSession(session)
  }

  renderSessions = () =>{
    return this.props.sessions.map( s => {
      return <Session session={s} sClick={this.sClick} id={s.id}/>
    })
  }

  newSession = () =>{
    this.props.saveDeck(
      {game:
        {hand1: 0, hand2: 0}
      })
  }

  render(){
    return(
      <div>
        <ButtonGroup>
          {this.renderSessions()}
          <Button variant='outline-secondary' onClick={this.newSession}>New Session</Button>
        </ButtonGroup>
        <p>
          <span>Current Session: {this.props.current_sess.id}
          </span>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    sessions: state.sessions,
    deck: state.deck,
    current_sess: state.current_sess
    //{id, deck_key, p1wins..., total_games}
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    setSession: (session) => dispatch({
        type: 'SET_SESSION',
        session: session
      }),
    saveDeck: (data) => dispatch(saveDeck(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionsContainer)
