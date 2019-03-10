import React from 'react'
import Card from '../components/Card'
// import PlayButton from '../components/PlayButton'

class Hand extends React.Component{
  state={
    selected: []
  }

  nums = ['3','4','5','6','7','8','9','10','JACK','QUEEN','KING','ACE','2']
  suits = ['DIAMONDS', 'CLUBS', 'HEARTS', 'SPADES']
  // unselected = []

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
    const nums = this.nums
    const suits = this.suits
    if (last.cards.length === 0) {return true}

    if (sel.length === 1){
      let s = sel[0]
      let l = last.cards[0]
      if (nums.indexOf(s.value) > nums.indexOf(l.value))
        {return 'single'}
      else if (nums.indexOf(s.value) === nums.indexOf(l.value)){
        if (suits.indexOf(s.suit) > suits.indexOf(l.suit))
          {return 'single'}
      }
    }

    else if (sel.length === 2){
      let s = {vals: sel.map(c => c.value ), suits: sel.map(c => c.suit)}
      let l = {vals: last.cards.map(c => c.value ),
          suits: last.cards.map(c => c.suit)}

      if (s.vals[0] === s.vals[1]){
        if (nums.indexOf(s.vals[0]) > nums.indexOf(l.vals[0]))
          {return 'pair'}
        else if (s.vals[0] === l.vals[0]){
          if ((s.suits.includes('HEARTS') && !l.suits.includes('SPADES')) || s.suits.includes('SPADES'))
            {return 'pair'}
        }
      }
    }

    else if (sel.length === 3){
      if (sel[0].value === sel[1].value && sel[2].value === sel[1].value){
        if ( nums.indexOf(sel[0].value) > nums.indexOf(last.cards[0].value) )
          {return '3ofkind'}
      }
    }

    else if (sel.length === 4){
      if (sel[0].value === sel[1].value && sel[2].value === sel[1].value && sel[3].value === sel[1].value){
        if ( nums.indexOf(sel[0].value) > nums.indexOf(last.cards[0].value) )
          { return '4ofkind' }
      }
    }

    else if (sel.length === 5){
      const types = ['straight', 'full house', 'flush', 'bomb', 'straight flush']

      let sSort = sel.sort(function(a,b) {return nums.indexOf(a.value) - nums.indexOf(b.value)} )
      const sPlayType = this.fiveCardPlayType(sSort)

      if (types.indexOf(sPlayType) > types.indexOf(last.play))
        {return sPlayType}

      else if (types.indexOf(sPlayType) === types.indexOf(last.play)){
        // debugger
        if (sPlayType === 'straight' || sPlayType === 'straight flush') {
          if (nums.indexOf(sSort[4].value) > nums.indexOf(last.cards[4].value) )
            {return sPlayType}
          else if (nums.indexOf(sSort[4].value) === nums.indexOf(last.cards[4].value) ){
            if (suits.indexOf(sSort[4].suit) > suits.indexOf(last.cards[4].suit))
              {return sPlayType}
          }
        }

        else if (sPlayType === 'flush'){
          if (suits.indexOf(sSort[4].suit) > suits.indexOf(last.cards[4].suit))
            {return sPlayType}
          else if (suits.indexOf(sSort[4].suit) === suits.indexOf(last.cards[4].suit)) {

              if (nums.indexOf(sSort[4].value) > nums.indexOf(last.cards[4].value) )
              {return sPlayType}
          }
        }

        else if (sPlayType === 'bomb' || sPlayType === 'full house'){
          if (nums.indexOf(sSort[2].value) > nums.indexOf(last.cards[2].value) )
            {return sPlayType}
        }

      }
    }
  }

  fiveCardPlayType = (s) =>{
    const sSplit = {vals: s.map(c => c.value ), suits: s.map(c => c.suit)}
    const nums = this.nums
    let straight =[]
    for (let i=0; i<4; i++){ straight.push(nums.indexOf(sSplit.vals[i])+1 === (nums.indexOf(sSplit.vals[i+1])) ) }

    if ((s[0].value === s[2].value && s[3].value === s[4].value) ||
        (s[2].value === s[4].value && s[0].value === s[1].value))
      {return 'full house'}    //sorted by value, has triple and double
    else if (s[0].value === s[3].value || s[1].value === s[4].value)
      {return 'bomb'}     //sorted by value, 4 cards in a row have same value
    else if ((sSplit.suits).every( (el, i, arr) => el === arr[0])){
      if (straight.every( ele => ele === true))
        {return 'straight flush'}
      else
        {return 'flush'}
    }
    else if (straight.every( ele => ele === true))
      {return 'straight'}
  }  //rtrn 'straight', 'flush', etc

  playFn = () => {
    //play logic
    const selected = this.state.selected    //[{card}, {card}]
    const last_played = this.props.last_played  //{play:'' cards:[{card},{card}]}
    if ((selected.length === last_played.cards.length) || last_played.cards.length === 0){

      const play = this.checkValidTurn(selected, last_played)
      if (play){
        this.props.playTurn(selected, this.props.player, play)
        this.setState({selected: []})
      }
      else{ (console.log('your play is smaller')) }
    }
    else{ console.log('invalid number of cards played') }
  }

  passFn = () =>{
    this.props.playTurn([],this.props.player, '')
  }

  renderCards = () =>{
    return this.props.hand.map( card => {return <Card card={card} clickFn={this.cardClick}/>})
  }

  renderButtons = () =>{
    if (this.props.player === this.props.current){
      return (<div>
        <button onClick={this.playFn}>Play Selected Cards</button>
        <button onClick={this.passFn}>Pass Turn</button>
      </div>)
    }
  }

  render(){
    // debugger
    return(
      <div>
          {this.renderCards()}
          <p>{this.state.selected.map( c => c.code)}</p>
          {this.renderButtons()}

      </div>
    )
  }
}

export default Hand
