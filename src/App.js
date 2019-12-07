import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';

// Two things we need to bring in to use Redux in our App.Js: 1)Provider and 2) the Store

// Since redux is separate from React, we bring react and redux together by bringing Provider in and wrapping our code //// in Provider
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken';

import './App.css';

if(localStorage.token) {
  setAuthToken(localStorage.token)  
}

const App = () => {
  useEffect(() => { // we use useEffect to tell our app to something after it renders (after performing the DOM updates)
    store.dispatch(loadUser());

  }, []); // we added empty brackets, telling React that our effect doesn't depend on any values from props or state, so it never needs to re-run.

  return(

  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} /> 
        <section className='container'></section>
        <Alert /> 
        {/* we want the Alert instance in the container but not in the Switch since the Switch can only contain Routes */}
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
)};
export default App;
