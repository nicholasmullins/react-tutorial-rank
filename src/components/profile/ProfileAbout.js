import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    wanttolearn,
    user: { name }
  }
}) => {
  return (
    <div className='profile-about bg-light p-2'>
      {bio && (
        <Fragment>
          <h2 className='text-primary'>About {name.trim().split(' ')[0]}</h2>
          <p>{bio}</p>
        </Fragment>
      )}

      <div className='line'></div>
      <h2 className='text-primary'>Languages I Want to Learn:</h2>
      <div className='wanttolearn'>
        {wanttolearn.map((language, index) => (
          <div className='p-1' key={index}>
            <i className='fas fa-check'>{language}</i>
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
