import React, { Fragment } from 'react';
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

import './App.css';

const App = () => (
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
);
export default App;
