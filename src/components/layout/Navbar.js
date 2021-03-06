import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/post-video'>
          {' '}
          <i className='fas fa-plus-square' />
          <span className='hide-sm'> Add a Video</span>
        </Link>
      </li>
      <li>
        <Link to='/profiles'>
          {' '}
          <i className='fas fa-users-cog' />
          <span className='hide-sm'> Contributors</span>
        </Link>
      </li>
      <li>
        <Link to='/videos'>
          {' '}
          <i className='fas fa-video' />
          <span className='hide-sm'> Videos</span>
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'> My Account</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='/'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'> Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/videos'>Videos</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/videos'>
          <i className='fas fa-thumbs-up'></i> Tutorial Rank
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
      {/* // if not loading (&& = then) do this (which is if isAuthenticated is true then show authlinks and not guestlinks)  */}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
