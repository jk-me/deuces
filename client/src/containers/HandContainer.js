import React from 'react'
import Card from '../components/Card'

class HandContainer extends React.Component{

  renderHand = (hnum) =>{
    return this.props[hnum].map( card => {return <Card image={card.image}/>})
  }

  render(){
    return(
      <div>
        <ul>
          {this.renderHand('hand1')}
        </ul>
        <ul>
          {this.renderHand('hand2')}
        </ul>
      </div>
    )
  }
}

export default HandContainer
