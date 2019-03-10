export default function gameReducer(

  state = {
    current_sess: {id:'', deck_key:'', p1wins:'',p2wins:'',},
    deck_id: '',
    sessions: [],
    deck: 'b3wse340ezeb',
    hand1: [],
    hand2:[],
    player: '',
    last_played: {play: '', cards: []}
  },
  action){

  console.log(action)
  switch (action.type){
    case 'FETCH_SESSIONS':
      console.log(action.sessions)
      return {...state, sessions: action.sessions}

    case 'SET_CURRENT_SESSION':
      return{...state, deck:action.deck, deck_id: action.deck_id}

    case 'FETCH_NEW_DECK':
      return{...state, deck:action.deck}

    case 'SAVE_NEW_SESSION':
      return{...state,
        sessions:[...state.sessions, action.payload],
        deck_id: action.payload.id,
        deck: action.payload.deck_key
      }

    case 'DRAW_HAND':
      return {...state, [action.num]: action.cards, player:''}

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
