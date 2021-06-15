/* import internal modules */
import { HANDLE_UTIL_ALERT } from '../../types/types'

export const setHandleAlert = (handleAlert) => ({
  type: HANDLE_UTIL_ALERT,
  payload: { handleAlert },
})
