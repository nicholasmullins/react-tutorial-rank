import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getVideos } from '../../actions/video';
import Spinner from '../layout/Spinner'

import VideoItem from './VideoItem'

const Videos = ({ getVideos, video: { videos, loading } }) => {
    
    useEffect(() => {
        getVideos()
    }, [getVideos])

    return loading ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">Videos</h1>
        <p className="lead">
            <i className="fas fa-user"></i>Welcome to the community
        </p>
        {/* Video Form */}
        <div className="videos">
            {videos.map(video => (
                <VideoItem key={video._id} video={video} />
            ))}
        </div>
    </Fragment>
}

Videos.propTypes = {
    getVideos: PropTypes.func.isRequired,
    video: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    video: state.video
})

export default connect(mapStateToProps, { getVideos })(Videos)
