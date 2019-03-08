export default function gameReducer(
  state = {
    hand1: [],
    hand2:[],
    current_player: '',
    last_played: {play: 'pair', cards: [{value:'4', suit:'DIAMONDS', code: '0D'}, {value:'4', suit:'DIAMONDS', code: '0D'}]}
  },
  action){

  console.log(action)
  switch (action.type){
    case 'DRAW_HAND':
      return {...state, [action.num]: action.cards}
    case 'PLAY_TURN':
      const next_player = action.player === 'hand1' ? 'hand2' : 'hand1'
      console.log(next_player)
      // return {...state,
      //   [action.current_player]: state.hand.remove(action.selected),
      //   last_played: {play: action.play, cards:[...action.selected]},
      //   player: next_player
      // }
    default:
      return state
  }
}
