export function fetchGames(){
  return dispatch =>{
    fetch('http://localhost:3001/games')
      .then(resp => resp.json())
      .then(data => dispatch({type:'FETCH_SESSIONS', sessions: data}))
  }
}

export function fetchNewDeck(){
  return dispatch=>{
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(resp => resp.json())
      .then(data => dispatch({type:'FETCH_NEW_DECK', deck: data.deck_id}))
  }
}

export function saveDeck(deckData){
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(deckData)
  }
  return dispatch=>{
    fetch('http://localhost:3001/games', data)
      .then(resp => resp.json())
      .then(deck => dispatch({type: 'SAVE_NEW_SESSION', payload: deck}))
      .catch(err=>err)
  }
}

export function fetchHand(num, deckstr){
  return dispatch =>{
    dispatch({type: 'LOADING'})
    console.log('fetching...')
    return fetch(`https://deckofcardsapi.com/api/deck/${deckstr}/draw/?count=2`)
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
