import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({ 
    profile: {
    user: { _id, name, avatar},
    status,
    bio,
    knowledgelevel,
    purpose,
    wanttolearn
} 

}) => {
  return <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img" />
      <div>
          <h2>{name}</h2>
          <p>{status}</p>
          <Link to={`/profile/${_id}`} className='btn btn-primary'>
            View Profile      
        </Link> 
      </div>
      <ul>
          {wanttolearn.slice(0,4).map((skill, index) => (   // we only want to show the first 4 languages wanttolearn so we sliced through that array and mapped it.
              <li key={index} className="text-primary">
                  <i className='fas fa-check' /> {skill}
              </li>
          ))}
      </ul>
  </div>
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileItem;
