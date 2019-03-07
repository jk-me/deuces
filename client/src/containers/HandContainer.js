import React from 'react'
import Card from '../components/Card'
import PlayButton from '../components/PlayButton'

class HandContainer extends React.Component{
  state={
    selected: []
  }

  cardClick = (card) =>{
    console.log(`clicked! ${card.code}`)
    if (this.state.selected.includes(card.code)){
      this.setState({selected:[...this.state.selected.filter(c => c !== card.code)]})
    }
    else {
      this.setState({selected:[...this.state.selected, card.code]})
      
    }
  }

  renderHand = (hnum) =>{
    return this.props[hnum].map( card => {return <Card card={card} clickFn={this.cardClick}/>})
  }

  render(){
    return(
      <div>
          {this.renderHand(this.props.hand)}
          <p>{this.state.selected.join(',')}</p>
          <PlayButton />
      </div>
    )
  }
}

export default HandContainer
