/* import external modules */
import React, { useEffect, lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { PersistGate } from "redux-persist/es/integration/react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

import { store, persistor } from "./store";
import { ScrollToTop, Loading, SnackBar } from "./components";
import { accessTokenSelector } from "./store/selectors/user";
import * as keys from "./utils/keys"

/* import internal modules */
const LazyHome = lazy(() => import("./views/Home"));
// const LazyChat = lazy(() => import("./views/Chat"));
const LazyUsers = lazy(() => import("./views/Users"));
const LazySignIn = lazy(() => import("./views/SignIn"));
const LazySignUp = lazy(() => import("./views/SignUp"));
const LazyGetApp = lazy(() => import("./views/GetApp"));
const LazyAddInterests = lazy(() => import("./views/AddInterests"));
const LazyPageNotFound = lazy(() => import("./views/PageNotFound"));
const LazySubscriptions = lazy(() => import("./views/Subscriptions"));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3043E9",
    },
    secondary: {
      main: "#E5E5E5",
    },
    action: {
      disabledBackground: "#2d3580",
      disabled: "#E5E5E5",
    },
  },
});

const PublicRoute = ({ component, ...rest }) => {
  return <Route {...rest} component={component} />;
};

const AuthRoute = ({ component, ...rest }) => {
  const state = store.getState();
  const accessToken = accessTokenSelector(state);

  if (accessToken) {
    return <Redirect to={keys.HOME} />;
  }

  return <Route {...rest} component={component} />;
};

const PrivateRoute = ({ path, component, ...rest }) => {
  const state = store.getState();
  const accessToken = accessTokenSelector(state);

  if (!accessToken) {
    return <Redirect to={keys.LOGIN} />;
  }
  
  return <Route exact {...rest} component={component} />;
};

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Router>
            <ScrollToTop />
            <Suspense fallback={<Loading />}>
              <Switch>
                <PublicRoute exact path={keys.HOME} component={LazyHome} />
                <PublicRoute path={keys.SUBSCRIBTIONS} component={LazySubscriptions} />
                <PublicRoute path={keys.GETAPP} component={LazyGetApp} />

                <AuthRoute path={keys.LOGIN} component={LazySignIn} />
                <AuthRoute path={keys.SIGNUP} component={LazySignUp} />
       
                <PrivateRoute path={keys.ADD_INTERESTS} component={LazyAddInterests} />
                {/* <PrivateRoute path={keys.CHAT} component={LazyChat} /> */}
                <PrivateRoute path={keys.USERS} component={LazyUsers} />

                <PublicRoute component={LazyPageNotFound} />
              </Switch>
            </Suspense>
          </Router>
          <SnackBar />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
