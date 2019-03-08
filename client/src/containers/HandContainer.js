import React from 'react'
import Card from '../components/Card'
// import PlayButton from '../components/PlayButton'

class HandContainer extends React.Component{
  state={
    selected: []
  }

  cardClick = (card) =>{
    console.log(`clicked! ${card.code}`)
    if (this.state.selected.includes(card)){
      this.setState({selected:[...this.state.selected.filter(c => c !== card)]})
    }
    else {
      this.setState({selected:[...this.state.selected, card]})
    }
  }

  checkValidTurn = (sel, last) =>{
    const nums = ['3','4','5','6','7','8','9','10','JACK','QUEEN','KING','ACE','2']
    const suits = ['DIAMONDS', 'CLUBS', 'HEARTS', 'SPADES']
    // debugger
    console.log(sel.length)
    if (last.length === 0){ return true}
    if (sel.length === 1){
      if (nums.indexOf(sel[0].value) > nums.indexOf(last[0].value)){
        console.log('t')
        return true
      }
      else if (nums.indexOf(sel[0].value) === nums.indexOf(last[0].value)){
        if (suits.indexOf(sel[0].suit) > suits.indexOf(last[0].suit)) {
          console.log('t1')

          return true
        }
        else {
          console.log('f')

          return false}
      }
      else {
        console.log('f2')

        return false}
    }
    else if (sel.length === 2){

    }
    else if (sel.length === 3){
    }
    else if (sel.length === 4){
    }
    else if (sel.length === 5){
    }
  }

  playTurn = () => {
    //play logic
    const selected = this.state.selected
    const last_played = this.props.last_played
    if ((selected.length === last_played.length) || last_played.length === 0){
      if (this.checkValidTurn(selected, last_played)){
        this.props.playTurn(selected, this.props.hand)
      }
    }
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
          <p>{this.state.selected.map( c => c.code)}</p>
          <button onClick={this.playTurn}>Play Selected Cards</button>
      </div>
    )
  }
}

export default HandContainer
