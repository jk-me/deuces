import React from 'react'
import Session from '../components/Session'
import {connect} from 'react-redux'
import {fetchNewDeck, saveDeck} from '../actions/gameActions'

class SessionsContainer extends React.Component{

  sClick = (deck,id) =>{
    this.props.setSession(deck,id)
  }

  renderSessions = () =>{
    return this.props.sessions.map( s => {
      return <Session deck={s} clickFn={this.sClick} id={s.id}/>
    })
  }

  newSession = () =>{
    this.props.fetchNewDeck()
    setTimeout(()=>console.log(this.props.deck), 500)
    console.log('hi')
    setTimeout(()=>this.props.saveDeck({game:{deck_key: this.props.deck}}), 1000)
  }

  render(){
    return(
      <div>
        {this.renderSessions()}
        <button onClick={this.newSession}>New Session</button>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    sessions: state.sessions,
    deck: state.deck
    //[{id, deck_key, p1wins..., total_games}, {}]
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    setSession: (deck,id) => dispatch({
        type: 'SET_DECK',
        deck: deck,
        deck_id: id
      }),
    fetchNewDeck: () => dispatch(fetchNewDeck()),
    saveDeck: (data) => dispatch(saveDeck(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionsContainer)
