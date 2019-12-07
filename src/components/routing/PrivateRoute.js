import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !loading ? (  // if user isn't authenticated and his user auth is not loading, then redirect to login page. Else allow access to private route.
        <Redirect to='login' />
      ) : (
        <Component {...props} />
      )
    }
  />
);


PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth // this pulls all state that is in the auth reducer
});

export default connect(mapStateToProps)(PrivateRoute);

// with this, we are trying to make a route private...so that you can't access certain routes if you are not logged in or are not authorized with a token to be there (aka other user's profile pages etc.)
