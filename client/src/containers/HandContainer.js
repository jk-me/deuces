import React from 'react'
import Card from '../components/Card'
import PlayButton from '../components/PlayButton'

class HandContainer extends React.Component{

  renderHand = (hnum) =>{
    return this.props[hnum].map( card => {return <Card image={card.image}/>})
  }

  render(){
    return(
      <div>
          {this.renderHand(this.props.hand)}
          <PlayButton />
      </div>
    )
  }
}

export default HandContainer
