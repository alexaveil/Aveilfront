/* import external modules */
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/* import internal modules */
import Loading from '../common/Loading'
const LazyHome = lazy(() => import('../../views/home'))
const LazyChat = lazy(() => import('../../views/chat'))
const LazyUsers = lazy(() => import('../../views/users'))
const LazySignIn = lazy(() => import('../../views/signIn'))
const LazySignUp = lazy(() => import('../../views/signUp'))
const LazyGetApp = lazy(() => import('../../views/getApp'))
const LazySubscriptionsPlans = lazy(() =>
  import('../../views/subscriptionsPlans')
)

const RouterComponent = () => {
  return (
    <Router basename="/">
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={LazySignIn} />
          <Route exact path="/home" component={LazyHome} />
          <Route exact path="/chat" component={LazyChat} />
          <Route exact path="/users" component={LazyUsers} />
          <Route exact path="/getapp" component={LazyGetApp} />
          <Route exact path="/signup" component={LazySignUp} />
          <Route
            exact
            path="/subscription"
            component={LazySubscriptionsPlans}
          />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default RouterComponent
