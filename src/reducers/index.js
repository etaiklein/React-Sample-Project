import { combineReducers } from 'redux'
import {
  REQUEST_ARTISTS, RECEIVE_ARTISTS
} from '../actions'

const initState = {
  artistsLoaded: false,
  artistsLoading: false,
  artistsError: "",
  artists: [],
};

const artistsReducer = (state = initState, action) => {
  switch (action.type) {
    case REQUEST_ARTISTS:
      return state
    case RECEIVE_ARTISTS:
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  artistsReducer,
})

export default rootReducer
