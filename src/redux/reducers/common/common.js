/* import internal modules */
import { HANDLE_UTIL_ALERT } from '../../types/types'

const initialState = {
  handleAlert: { message: '', status: false, severity: 'success' },
}

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_UTIL_ALERT:
      return Object.assign({}, state, {
        handleAlert: action.payload.handleAlert,
      })

    default:
      return state
  }
}

export default CommonReducer
