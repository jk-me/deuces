import React from 'react'
import {connect} from 'react-redux'

class MessageBox  extends React.Component{

  showWinner = () =>{
      if (this.props.winner){
        return(<div class="message">Winner: {this.props.winner} </div>)
      }
  }

  showTurnInfo = () =>{
    const {current_player, play_error} = this.props
    if (play_error){
      return(
        <div class="message">
          <p> Player {current_player[4]} turn </p>
          <p>{play_error}</p>
        </div>
      )
    }
    else if (current_player){
      return(
        <div class="message"> Player {current_player[4]} turn </div>
      )
    }
  }

  render(){
    return (
      <>
        {this.showTurnInfo()}
        {this.showWinner()}
      </>
    )
  }
}

const mapStateToProps = state =>{
  return{
    winner: state.winner,
    play_error: state.play_error,
    current_player: state.player
  }
}


export default connect(mapStateToProps, null)(MessageBox)
