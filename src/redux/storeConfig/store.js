/* import external modules */
import { createStore } from 'redux'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { persistReducer, persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

/* import internal modules */
import rootReducer from '../reducers/rootReducer'

const persistConfig = {
  key: 'aveil-chatbot-approot',
  storage,
  whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools())

const persistor = persistStore(store) // used to create the persisted store, persistor will be used in the next step

export { store, persistor }
