import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'; // we have to bring in withRouter to be able to use our history object to redirect pages from the route
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    status: '',
    bio: '',
    knowledgelevel: '',
    purpose: '',
    wanttolearn: ''
  });

  useEffect(() => {
    getCurrentProfile();

    // in here we have to fill in the form with the current values. to do that we have to say IF it's loading or there is no profile.whatever then leave blank,
    // if not THEN load the current profile field's info.

    setFormData({
      status: loading || !profile.status ? '' : profile.status,
      bio: loading || !profile.bio ? '' : profile.bio,
      knowledgelevel:
        loading || !profile.knowledgelevel ? '' : profile.knowledgelevel,
      purpose: loading || !profile.purpose ? '' : profile.purpose,
      wanttolearn:
        loading || !profile.wanttolearn ? '' : profile.wanttolearn.join(',')
    });
  }, [loading, getCurrentProfile]);

  const { status, bio, knowledgelevel, purpose, wanttolearn } = formData; // we destructured these so we can use them without using props.whatever

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>

      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <select name='status' value={status} onChange={e => onChange(e)}>
            <option value='0'>* Select Professional Status</option>
            <option value='Student or Learning'>Student or Learning</option>
            <option value='Developer'>Developer</option>
            <option value='Junior Developer'>Junior Developer</option>
            <option value='Senior Developer'>Senior Developer</option>
            <option value='Manager'>Manager</option>
            <option value='Instructor'>Instructor or Teacher</option>
            <option value='Other'>Other</option>
          </select>
          <small className='form-text'>
            Give us an idea of where you are at in your career
          </small>
        </div>

        <div className='form-group'>
          <textarea
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          ></textarea>
          <small className='form-text'>Tell us a little about yourself</small>
        </div>

        <div className='form-group'>
          <select
            name='knowledgelevel'
            value={knowledgelevel}
            onChange={e => onChange(e)}
          >
            <option value='0'>What is your Knowledge Level?</option>
            <option value='Complete Beginner'>Never Written Code Before</option>
            <option value='HTML and CSS'>Knowledge of HTML and CSS</option>
            <option value='HTML CSS JavaScript'>
              Basic Knowlege of HTML, CSS and JavaScript
            </option>
            <option value='Basic Full Stack'>Have Made a Full Stack App</option>
            <option value='React'>Full Stack with React/Angular</option>
            <option value='Redux and Native'>
              Learning Redux, Native or Similar Language Advanced Concepts
            </option>
            <option value='Expert'>Expert But Need Practice</option>
          </select>
          <small className='form-text'>What have you learned so far?</small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='What is Your Coding Goal?'
            name='purpose'
            value={purpose}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            What do you plan to do with your coding skills?
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Languages You Want to Learn'
            name='wanttolearn'
            value={wanttolearn}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
          <input type='submit' className='btn btn-primary my-1' />
          <Link className='btn btn-light my-1' to='/dashboard'>
            Go Back
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
