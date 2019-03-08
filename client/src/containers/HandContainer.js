import React from 'react'
import Card from '../components/Card'
// import PlayButton from '../components/PlayButton'

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

  playTurn = () => {
    //play logic
    if ((this.state.selected.length === this.props.last_played.length) || this.props.last_played.length === 0){
      this.props.playTurn(this.state.selected, this.props.hand)}
    else{
      console.log('turn error')
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
          <button onClick={this.playTurn}>Play Selected Cards</button>
      </div>
    )
  }
}

export default HandContainer
