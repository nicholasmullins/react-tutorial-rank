import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getVideos } from '../../actions/video';
import Spinner from '../layout/Spinner';

import VideoItem from './VideoItem';

const Videos = ({ getVideos, video: { videos, loading } }) => {
  useEffect(() => {
    getVideos();
  }, [getVideos]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Videos</h1>
      <p className='lead'>
        <i className='fas fa-user'></i>Video Tutorials for Every Language
      </p>
      <Link className='btn btn-light my-1' to='/post-video'>
        Add A Video
      </Link>
      <div className='videos'>
        {videos.map(video => (
          <VideoItem key={video._id} video={video} />
        ))}
      </div>
    </Fragment>
  );
};

Videos.propTypes = {
  getVideos: PropTypes.func.isRequired,
  video: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  video: state.video
});

export default connect(mapStateToProps, { getVideos })(Videos);