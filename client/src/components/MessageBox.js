import React from 'react'

class MessageBox  extends React.Component{
  click = () =>{
    this.props.clickFn(this.props.card)
  }
  render(){
    return (
      <div class="message">
        Invalid Hand!
        Player 1 wins!
      </div>

    )
  }
}

export default MessageBox
