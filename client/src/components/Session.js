import React from 'react'

class Session extends React.Component{
  click = () =>{
    this.props.sClick(this.props.session)
  }
  render(){
    return (
        <button onClick={this.click}> Session {this.props.session.id} </button>
    )
  }
}

export default Session
