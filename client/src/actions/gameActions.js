const apiurl = 'http://localhost:3001'

export function fetchGames(){
  return dispatch =>{
    fetch('/games')
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
    fetch('/games', data)
      .then(resp => resp.json())
      .then(deck => dispatch({type: 'SAVE_NEW_SESSION', payload: deck}))
      .catch(err=>err)
  }
}

export function fetchHand(num, deckstr){
  return dispatch =>{
    dispatch({type: 'LOADING'})
    console.log('fetching...')
    return fetch(`https://deckofcardsapi.com/api/deck/${deckstr}/draw/?count=13`)
      .then(resp => resp.json())
      .then(data => dispatch({type: 'DRAW_HAND', cards: data.cards, num: `hand${num}`}))
  }
}

export function shuffleDeck(deckstr){
  return dispatch =>{
    console.log('shuffling...')
    fetch(`https://deckofcardsapi.com/api/deck/${deckstr}/shuffle/`)
      .then(data => console.log('shuffled.'))
  }
}

export function gameWon(gameData, gameId){
  let data = {
    method: 'PATCH',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(gameData)
  }
  return dispatch =>{
    fetch(`/games/${gameId}`, data)
      .then(resp => resp.json())
      .then(game => {
        dispatch({type: 'UPDATE_SESSION', payload: game})})
      // .catch(err=>err)
  }
}

export function deleteSess(gameId){
  let data = {
    method: 'DELETE',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  return dispatch =>{
    fetch(`/games/${gameId}`, data)
    .then(resp => resp.json())
    .then(games =>{
      dispatch({type: 'FETCH_SESSIONS', sessions:games})
    })
  }
}
