export function fetchHand(num){
  return dispatch =>{
    dispatch({type: 'LOADING'})
    console.log('fetching...')
    return fetch('https://deckofcardsapi.com/api/deck/b3wse340ezeb/draw/?count=13')
      .then(resp => resp.json())
      .then(data => dispatch({type: 'DRAW_HAND', cards: data.cards, num: `hand${num}`}))
  }
}

export function shuffleDeck(){
  return dispatch =>{
    console.log('shuffling...')
    fetch('https://deckofcardsapi.com/api/deck/b3wse340ezeb/shuffle/')
      .then(data => console.log('shuffled.'))
  }
}
