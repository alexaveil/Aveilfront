/* import internal modules */
import { HANDLE_ALERT_DIALOG } from '../../types/types'

export const setHandleAlertDialog = (status) => ({
  type: HANDLE_ALERT_DIALOG,
  payload: { status },
})
