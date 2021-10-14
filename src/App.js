/* import external modules */
import React, { useEffect, lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/es/integration/react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

import { store, persistor } from "./store";
import { ScrollToTop, Loading, SnackBar } from "./components";

/* import internal modules */
// const LazyHome = lazy(() => import("./views/home"));
// const LazyChat = lazy(() => import("./views/chat"));
// const LazyUsers = lazy(() => import("./views/users"));
const LazySignIn = lazy(() => import("./views/SignIn"));
// const LazySignUp = lazy(() => import("./views/signUp"));
// const LazyGetApp = lazy(() => import("./views/getApp"));
// const LazyProfile = lazy(() => import("./views/profile"));
// const LazyChatMobile = lazy(() => import("./views/chatMobile"));
const LazyPageNotFound = lazy(() => import("./views/pageNotFound"));
const LazySubscriptions = lazy(() => import("./views/subscriptionsPlans"));

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
                <Route exact path="/" component={LazySignIn} />
                   {/* 
                <Route exact path="/home" component={LazyHome} />
                <Route exact path="/chat" component={LazyChat} />
                <Route exact path="/users" component={LazyUsers} />
                <Route exact path="/getapp" component={LazyGetApp} />
                <Route exact path="/signup" component={LazySignUp} />
                <Route exact path="/profile" component={LazyProfile} />
                <Route exact path="/chatMobile" component={LazyChatMobile} /> */}
                <Route
                  exact
                  path="/subscription"
                  component={LazySubscriptions}
                />
                <Route component={LazyPageNotFound} />
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
