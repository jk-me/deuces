export default function gameReducer(

  state = {
    current_sess: {id:'', hand1:'',hand2:''},
    sessions: [],
    deck: '',
    hand1: [],
    hand2:[],
    player: '',
    last_played: {play: '', cards: []},
    winner:''
  },
  action){

  console.log(action)
  switch (action.type){
    case 'UPDATE_SESSION':
    const winner = state.player === 'hand1' ? 'Player 2' : 'Player 1'
      return {...state,
        current_sess: action.payload,
        sessions:[...state.sessions.filter( el => el.id !==action.payload.id), action.payload],
        player:'',
        winner:winner
      }

    case 'FETCH_SESSIONS':
      console.log(action.sessions)
      return {...state, sessions: action.sessions}

    case 'SET_SESSION':
      return{...state,
        hand1: [],
        hand2: [],
        current_sess: action.session}

    case 'FETCH_NEW_DECK':
      return{...state, deck:action.deck}

    case 'SAVE_NEW_SESSION':
      return{...state,
        sessions:[...state.sessions, action.payload],
        current_sess:action.payload
      }

    case 'DRAW_HAND':
      return {...state, [action.num]: action.cards, player:'', last_played:{play: '', cards: []}, winner:''}

    case 'SET_FIRST_PLAYER':
      return {...state, player: action.player}

    case 'PLAY_TURN':
      const next_player = action.player === 'hand1' ? 'hand2' : 'hand1'
      console.log(next_player)
      // debugger
      return {...state,
        [action.player]:state[action.player].filter( el => !action.selected.includes(el)),
        last_played: {play: action.play, cards:[...action.selected]},
        player: next_player
      }
    default:
      return state
  }
}
