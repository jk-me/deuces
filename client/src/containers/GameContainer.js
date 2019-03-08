import React from 'react'
import HandContainer from './HandContainer'

class GameContainer extends React.Component{

  render(){
    return (
      <div>
        <HandContainer hand='hand1' hand1={this.props.hand1}/>
        <HandContainer hand='hand2' hand2={this.props.hand2}/>
      </div>
    )
  }
}

export default GameContainer
