import React from 'react'
import Button from 'react-bootstrap/Button'

class Session extends React.Component{
  click = () =>{
    this.props.sClick(this.props.session)
  }
  render(){
    return (
        <Button variant='outline-secondary' onClick={this.click} > Session {this.props.session.id} </Button>
    )
  }
}

export default Session
