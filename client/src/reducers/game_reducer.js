export default function gameReducer(state = {hand: []}, action){
  console.log(action)
  switch (action.type){
    case 'DRAW_HAND':
      return {hand: action.cards}
    default:
      return state
  }
}
