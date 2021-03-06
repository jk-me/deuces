import React from 'react'
import Card from '../components/Card'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

class Hand extends React.Component{
  state = {
    selected: []
  }

  nums = ['3','4','5','6','7','8','9','10','JACK','QUEEN','KING','ACE','2']
  suits = ['DIAMONDS', 'CLUBS', 'HEARTS', 'SPADES']

  cardClick = (card) =>{
    // console.log(`clicked! ${card.code}`)
    if (this.state.selected.includes(card)){
      this.setState({selected:[...this.state.selected.filter(c => c !== card)]})
    }
    else {
      this.setState({selected:[...this.state.selected, card]})
    }
  }

  //returns play type ('single', etc) or true when last play empty
  //only called for valid number of cards (or last play empty)
  checkValidTurn = (sel, last) =>{
    const nums = this.nums
    const suits = this.suits

    const l = {vals: last.cards.map(c => c.value ), suits: last.cards.map(c => c.suit)}
    const s = {vals: sel.map(c => c.value ), suits: sel.map(c => c.suit)}

    if (sel.length === 1){
      if (nums.indexOf(s.vals[0]) > nums.indexOf(l.vals[0]))
        {return 'single'}
      else if (nums.indexOf(s.vals[0]) === nums.indexOf(l.vals[0])){
        if (suits.indexOf(s.suits[0]) > suits.indexOf(l.suits[0]))
          {return 'single'}
      }
    }

    else if (sel.length === 2){
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
      if (s.vals[0] === s.vals[1] && s.vals[2] === s.vals[1]){
        if (nums.indexOf(s.vals[0])>nums.indexOf(l.vals[0]))
          {return '3ofkind'}
      }
    }

    else if (sel.length === 4){
      if (s.vals[0] === s.vals[1] && s.vals[2] === s.vals[1] && s.vals[3] === s.vals[1]){
        if ( nums.indexOf(s.vals[0]) > nums.indexOf(l.vals[0]) )
          { return '4ofkind' }
      }
    }

    else if (sel.length === 5){
      const types = ['straight', 'flush', 'full house', 'bomb', 'straight flush']

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

  fiveCardPlayType = (s) =>{  //returns 'straight', 'flush', etc
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
  }

  checkWin = () =>{
    const {hand, dispatchWin, player, session} = this.props
    if (hand.length === 0){
      dispatchWin(
        { game: {[player]: session[player]+1}}, //hand1: session[hand1]+1
        session.id
      )
    }
  }

  playFn = () => {
    const {selected} = this.state //[...cards]
    const {last_played, dispatchPlay, dispatchError} = this.props  //{play:'single' cards:[...]}
    if ((selected.length === last_played.cards.length) || last_played.cards.length === 0){

      const play = this.checkValidTurn(selected, last_played)
      if (play){  //if play is true/valid
        this.showHide('play')
        dispatchPlay(selected, this.props.player, play)
        this.setState({selected: []})
        setTimeout(() =>this.checkWin(), 300)
      }
      else{ (dispatchError('Your play is invalid or smaller than the previous play.')) }
    }
    else{ dispatchError('Invalid number of cards played.') }
  }

  passButton = () =>{
    this.props.dispatchPlay([],this.props.player, '')
    this.setState({selected: []})
    this.showHide('pass')
  }

  showHide = (arg) =>{
    let cards = document.getElementsByClassName(this.props.player);
    //card imgs have class="card hand1"
    if (arg === 'play' || arg === 'pass'){
      for (const x of cards){
        x.style.visibility = "";
      }
      return
    }
    this.toggleVisibleImgs(cards)
  }

  toggleVisibleImgs = (imgArr) =>{ //use for show/hide button
    for (const x of imgArr){
      if (x.style.visibility === "") {
        x.style.visibility = "visible";
      } else {
        x.style.visibility = "";
        this.setState({selected: []})
      }
    }
  }

  renderCards = () =>{
    return this.props.hand.map( card => {return <Card card={card} player={this.props.player} clickFn={this.cardClick}/>})
  }

  renderButtons = () =>{
    if (this.props.player === this.props.current){
      return (
        <div>
          <div>
            <ButtonGroup>
              <Button className='button' variant='outline-info' onClick={this.playFn}>
                Play Selected
              </Button>
              <Button className='button' variant='outline-info' onClick={this.showHide}>
                Show/Hide
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <Button className='button' variant='outline-info' onClick={this.passButton}>
              Pass Turn
            </Button>
          </div>
        </div>
      )
    }
  }

  render(){
    return(
      <Col>
          <h4>Player {this.props.player[4]}</h4>
          {this.renderCards()}
          <p>{this.state.selected.map( c => c.code).join(', ')}</p>
          {this.renderButtons()}
      </Col>
    )
  }
}

export default Hand
