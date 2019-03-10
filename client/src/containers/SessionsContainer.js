import React from 'react'
import {connect} from 'react-redux'

class SessionsContainer extends React.Component{
  render(){
    return(
      <div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    sessions: state.sessions
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    setSession: (session) => dispatch({
        type: 'SET_DECK',
        deck: session.deck_key
      })
  }
}

export default connect(mapStateToProps)(SessionsContainer)
