/* import external modules */
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'

/* import internal modules */
import theme from '../Theme'
import Router from '../Router'
import { store, persistor } from '../../redux/storeConfig/store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<h3>Loading</h3>}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
