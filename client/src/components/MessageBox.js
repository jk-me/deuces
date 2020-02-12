import React from 'react'
import {connect} from 'react-redux'

class MessageBox  extends React.Component{

  showWinner = () =>{
      if (this.props.winner){
        return(<p>Winner: {this.props.winner} </p>)
      }
  }

  showCurrPlayer = () =>{
    const {curr_player} = this.props
    if (curr_player){
      return(<p>{curr_player} turn</p>)
    }
  }

  render(){
    return (
      <div class="message">
        {this.showCurrPlayer()}
        {this.showWinner()}
        Invalid Hand!
        Player 1 wins!
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    winner: state.winner,
    curr_player: state.player
  }
}


export default connect(mapStateToProps, null)(MessageBox)
