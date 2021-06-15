/* import external modules */
import { combineReducers } from 'redux'

/* import internal modules */
import user from './user/user'
import common from './common/common'

const rootReducer = combineReducers({
  user,
  common,
})

export default rootReducer
