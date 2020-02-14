import React from 'react'
import {connect} from 'react-redux'

class MessageBox  extends React.Component{

  showWinner = () =>{
      if (this.props.winner){
        return(<p>Winner: {this.props.winner} </p>)
      }
  }

  showCurrentPlayer = () =>{
    const {current_player} = this.props
    if (current_player){
      return(
        <p> Player {current_player[4]} turn </p>
      )
    }
  }

  showPlayError = () =>{
    if (this.props.play_error){
      return(<p>{this.props.play_error} </p>)
    }
  }

  render(){
    return (
      <div class="message">
        {this.showCurrentPlayer()}
        {this.showWinner()}
        {this.showPlayError()}
        Invalid Hand!
        Player 1 wins!
      </div>
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
