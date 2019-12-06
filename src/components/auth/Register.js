import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const Register = () => {
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
      console.log('Passwords do not match');
    } else {
      console.log('Success!');

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
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
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
            minLength='6'
            value={password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            minLength='6'
            value={password2}
            onChange={e => onChange(e)}
            required
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

export default Register;
