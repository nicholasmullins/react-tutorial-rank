import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import VideoItem from '../videos/VideoItem';
import Spinner from '../layout/Spinner';
import { getVideo } from '../../actions/video';

const Video = ({ getVideo, video: { video, loading }, match }) => {
  useEffect(() => {
    getVideo(match.params.id);
  }, [getVideo]);

  return loading || video === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/videos' className='btn'>
        Back To Videos
      </Link>
      <VideoItem video={video} showActions={true} />
    </Fragment>
  );
};

Video.propTypes = {
  getVideo: PropTypes.func.isRequired,
  video: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  video: state.video
});

export default connect(mapStateToProps, { getVideo })(Video);
