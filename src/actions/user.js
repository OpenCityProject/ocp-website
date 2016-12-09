const prefix = 'USER/'
export const SET_USERNAME = prefix + 'SET_USERNAME'

export function setUsername(username){
  return {
    type: SET_USERNAME
  , username
  }
}

