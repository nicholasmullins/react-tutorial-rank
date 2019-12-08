import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading } //pulling what we need from these through destructuring by using Connect which keeps us connected to the Redux store
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]); // maybe this wasn't the right thing to do, check back on it later as it was an empty array but was throwing an error.

{/* // IF the profile is null and it's still loading THEN we show the spinner. Alse we are bringing in user and user.name from above and using && to say IF user exists, THEN show their name*/}

  return loading && profile === null ? <Spinner /> : <Fragment>
    <h1 className="large text-primary">Dashboard</h1>
  <p className="lead">
    <i className="fas fa-user"></i> Welcome { user && user.name } </p>
  
  {/* // If / else statement to see if the user has a profile or not.  */}
  {profile !== null ? (
  <Fragment>has profile</Fragment>
  ) : (
    <Fragment>has not</Fragment>
  )}

  </Fragment>; 
  
  

};



Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
