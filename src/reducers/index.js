import { INITIAL_LOAD, SWITCH_CHECK } from '../constants/ActionTypes'
import playersData from '../api/players.json'
// import { combineReducers } from 'redux'

const players = (state = {}, action) => {
  switch (action.type) {
    case INITIAL_LOAD:
      return {
        players: playersData
      }
    case SWITCH_CHECK:
      return {
        ...state,
        players: state.players.map(player => {
          if (player.id !== action.playerId) {
            return player
          }
          return {...player, isChecked: !player.isChecked}
        })
      }
    default:
      return state
  }
}

// const myReducer = combineReducers({
//   players
// })

export default players
