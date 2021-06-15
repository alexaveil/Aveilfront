/* import external modules */
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/* import internal modules */
const LazyHome = lazy(() => import('../../views/home'))
const LazyUsers = lazy(() => import('../../views/users'))
const LazySignIn = lazy(() => import('../../views/signIn'))
const LazySignUp = lazy(() => import('../../views/signUp'))

const RouterComponent = () => {
  return (
    <Router basename="/">
      <Suspense fallback={<h3>Loading...</h3>}>
        <Switch>
          <Route exact path="/" component={LazySignIn} />
          <Route exact path="/home" component={LazyHome} />
          <Route exact path="/users" component={LazyUsers} />
          <Route exact path="/signup" component={LazySignUp} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default RouterComponent
