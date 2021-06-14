/* import internal modules */
import { HANDLE_USER } from '../../types/types'

const initialState = {
  user: {},
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_USER:
      return Object.assign({}, state, { user: action.payload.user })

    default:
      return state
  }
}

export default UserReducer
