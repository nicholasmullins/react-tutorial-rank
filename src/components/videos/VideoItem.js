import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment'; // this is to record the time posted in a particular format
import { connect } from 'react-redux';
import { addLike, removeLike, deleteVideo } from '../../actions/video'

const VideoItem = ({
  addLike,
  removeLike,
  deleteVideo,
  auth,
  link,
  video: { _id, title, desc, name, avatar, user, likes, reviews, date }
}) => {
  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{title}</p>
        <p className='my-1'>{desc}</p>
        <iframe title={title} width="560" height="315" src={link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className='my-1'>Instructor: {desc}</p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        <button onClick={ e => addLike(_id)} type='button' className='btn btn-light'>

          <i className='fas fa-thumbs-up' />{' '}
          <span>{likes.length > 0 &&
              <span>{likes.length}</span>}
          </span>
        </button>
        <button onClick={ e => removeLike(_id)} type='button' className='btn btn-light'>
          <i className='fas fa-thumbs-down'></i>
        </button>
        <Link to={`/videos/${_id}`} className='btn btn-primary'>
          {/* put in an if statement to only display number of comments IF there is a comment */}
          Reviews{' '}
          {reviews.length > 0 && (
            <span className='comment-count'> {reviews.length}</span>
          )}
        </Link>
        {/* only the user who posted this can see the delete button (IF auth isn't loading and the profile user is the authorized user THEN) */}

        {!auth.loading && user === auth.user._id && (
          <button onClick={e => deleteVideo(_id)} type='button' className='btn btn-danger'>
            <i className='fas fa-times'></i>
          </button>
        )}
      </div>
    </div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deleteVideo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deleteVideo })(VideoItem);
