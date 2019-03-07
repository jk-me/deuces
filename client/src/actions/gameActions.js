export function fetchHand(){
  return dispatch =>{
    dispatch({type: 'LOADING'})
    console.log('fetching...')
    return fetch('https://deckofcardsapi.com/api/deck/b3wse340ezeb/draw/?count=13')
      .then(resp => resp.json())
      .then(data => dispatch({type: 'DRAW_HAND', cards: data.cards}))
  }
}
