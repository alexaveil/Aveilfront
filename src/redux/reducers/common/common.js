/* import internal modules */
import { HANDLE_ALERT_DIALOG } from '../../types/types'

const initialState = {
  alertDialog: false,
}

const AlertDialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_ALERT_DIALOG:
      return Object.assign({}, state, {
        alertDialog: action.payload.status,
      })

    default:
      return state
  }
}

export default AlertDialogReducer
