import React from 'react'
import Session from '../components/Session'
import {connect} from 'react-redux'

class SessionsContainer extends React.Component{

  sClick = (deck,id) =>{
    this.props.setSession(deck,id)
  }

  renderSessions = () =>{
    return this.props.sessions.map( s => {
      return <Session deck={s} clickFn={this.sClick} id={s.id}/>
    })
  }
  render(){
    return(
      <div>
        {this.renderSessions()}
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    sessions: state.sessions
    //[{id, deck_key, p1wins..., total_games}, {}]
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    setSession: (deck,id) => dispatch({
        type: 'SET_DECK',
        deck: deck,
        deck_id: id
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionsContainer)
