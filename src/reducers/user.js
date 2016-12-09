import {
  SET_USERNAME
} from '../actions/user'

const initialState = {
  username: null
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return {...state, username: action.username}
    default:
      return state
  }
}
