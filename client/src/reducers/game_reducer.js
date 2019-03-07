export default function gameReducer(
  state = {
    hand1: [],
    hand2:[]
  },
  action){
  console.log(action)
  switch (action.type){
    case 'DRAW_HAND':
      return {...state, [action.num]: action.cards}
    default:
      return state
  }
}
