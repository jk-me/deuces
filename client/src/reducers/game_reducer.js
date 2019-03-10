export default function gameReducer(

  state = {
    hand1: [],
    hand2:[],
    player: '',
    last_played: {play: '', cards: []}
  },
  action){

  console.log(action)
  switch (action.type){
    case 'DRAW_HAND':
      return {...state, [action.num]: action.cards}
    case 'SET_FIRST_PLAYER':
      return {...state, player: action.player}
    case 'PLAY_TURN':
      const next_player = action.player === 'hand1' ? 'hand2' : 'hand1'
      console.log(next_player)
      // debugger
      return {...state,
        [action.player]: state[action.player].filter( el => !action.selected.includes(el)),
        last_played: {play: action.play, cards:[...action.selected]},
        player: next_player
      }
    default:
      return state
  }
}
