import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment'; // this is to record the time posted in a particular format
import { connect } from 'react-redux';

const VideoItem = ({
  auth,
  video: { _id, title, desc, name, avatar, user, likes, reviews, date }
}) => {
  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <a href='profile.html'>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p className='my-1'>{title}</p>
        <p className='my-1'>{desc}</p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        <button type='button' className='btn btn-light'>
          <i className='fas fa-thumbs-up'></i>
          <span>{likes.length}</span>
        </button>
        <button type='button' className='btn btn-light'>
          <i className='fas fa-thumbs-down'></i>
        </button>
        <Link to={`/videos/${_id}`} className='btn btn-primary'>
          {/* put in an if statement to only display number of comments IF there is a comment */}
          Discussion{' '}
          {reviews.length > 0 && (
            <span className='comment-count'>{reviews.length}</span>
          )}
        </Link>
        {/* only the user who posted this can see the delete button (IF auth isn't loading and the profile user is the authorized user THEN) */}

        {!auth.loading && user === auth.user._id && (
          <button type='button' className='btn btn-danger'>
            <i className='fas fa-times'></i>
          </button>
        )}
      </div>
    </div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(VideoItem);
