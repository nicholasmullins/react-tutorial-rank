import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux'; // this allows us to connect our components to Redux
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert'; // this is our setAlert REDUX action
import { register } from '../../actions/auth'; // this is our register REDUX action

import PropTypes from 'prop-types'


const Register = ({ setAlert, register, isAuthenticated }) => {
  // we were doing props but we destructured them and also used PropTypes at the bottom 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  }); // when using Hooks the first variable is our state and the second variable is the set state.
  // What goes inside of useState is our default values. Also, by using hooks we don't have to create a state component and pass down anything! Brilliant.

  const { name, email, password, password2 } = formData; // this is destructuring so we don't have to type formData in every time.

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value }); //this onChange function acts as our setState to change the formData each time there is a change in our form by taking the e.target.name (the name attribute in each field) and changing it to the value attribute}

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger'); // we put Danger because of danger in our CSS // we were saying props.setAlert but now we don't have to since we passed it into the function by destructuring.
    } else {
      register( {name, email, password} ); // we can access these because we are calling them from the component state (formData)

      // WROTE ALL THIS WITH INSTRUCTOR to learn how to use axios to make promise-based HTTP requests. We will be re-doing this with a Redux Action.
      // But I wanted you to see the code and know that I understood how all of this works

      //   const newUser = {  // putting name, email etc is the same as doing name:name, email:email etc.
      //       name,
      //       email,
      //       password
      //   }

      //   try {
      //       const config = {  // since we are sending data, we need to create variables with the headers and a body
      //           headers: {
      //               "Content-Type": "application/json"
      //           }
      //       }

      //       const body = JSON.stringify(newUser);

      //       const res = await axios.post('/api/users', body, config) // we are using axios as an http client and and axios is promise-based so we are using await.
      //                                                  // axios allows us to make requests from our http. Super cool.
      //                                                  // first parameter is the route for backend, second is the body and the third is the config(headers)
      //       console.log(res.data) // this should be the token.
      //   } catch (err) {
      //       console.log(err.response.data)
      //   }
    }
  };

  // Redirects us to dashboard ...did all of this first in Login page. 
  if(isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)} // we could call setFormData directly but we are going to call an OnChange function instead
            // required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            // required
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            // minLength='6'
            value={password}
            onChange={e => onChange(e)}
            // required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            // minLength='6'
            value={password2}
            onChange={e => onChange(e)}
            // required
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = { // This is how you pass down props from the Redux store to the component. By using connect and mapping out the state to prop and using proptypes
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool

}


const mapStateToProps = state => ({ // mapStateToProps passes down state to props
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register); // to use connect, it must be called on the export.
// whenever we want to use an redux Action, we have to import it up top and
// then we have to put it as a parameter in connect()
// Connect() takes two parameters: 1) any kind of state you want to map  2) an object
// with any actions you want to use (like setAlert)
