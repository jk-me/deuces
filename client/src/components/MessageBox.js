import React from 'react'
import {connect} from 'react-redux'

class MessageBox  extends React.Component{

  renderMessage = () =>{
    if (this.props.winner){

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
