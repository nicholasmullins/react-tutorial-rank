import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteReview } from '../../actions/video'

const ReviewItem = ({
  videoId,
  review: { _id, text, name, avatar, user, date },
  auth,
  deleteReview
}) => (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        {!auth.loading && user === auth.user._id && (
            <button
            onClick={() => deleteReview(videoId, _id)}
            type='button'
            className='btn btn-danger'
          >
            <i className='fas fa-times' />
          </button>
        )}
      </div>
    </div>
  );

ReviewItem.propTypes = {
  videoId: PropTypes.number.isRequired,
  review: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteReview: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {deleteReview})(ReviewItem);
