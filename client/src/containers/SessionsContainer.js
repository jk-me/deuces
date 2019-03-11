import React from 'react'
import Session from '../components/Session'
import {connect} from 'react-redux'
import {fetchNewDeck, saveDeck} from '../actions/gameActions'

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
    this.props.fetchNewDeck()
    setTimeout(()=>this.props.saveDeck({game:{deck_key: this.props.deck}}), 500)
  }

  render(){
    return(
      <div>
        <span>Sessions:</span>
        {this.renderSessions()}
        <button onClick={this.newSession}>New Session</button>
        <p><span>Currently Playing:{this.props.current_sess.id}</span></p>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    sessions: state.sessions,
    deck: state.deck,
    current_sess: state.current_sess
    //[{id, deck_key, p1wins..., total_games}, {}]
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    setSession: (session) => dispatch({
        type: 'SET_CURRENT_SESSION',
        session: session
      }),
    fetchNewDeck: () => dispatch(fetchNewDeck()),
    saveDeck: (data) => dispatch(saveDeck(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionsContainer)
