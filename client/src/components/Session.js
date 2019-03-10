import React from 'react'

class Session extends React.Component{
  click = () =>{
    this.props.clickFn(this.props.deck.deck_key, this.props.deck.id)
  }
  render(){
    return (
        <button onClick={this.click}> Session {this.props.deck.id} </button>
    )
  }
}

export default Session
