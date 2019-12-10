import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
    return (
        <div className="dash-buttons">
        <Link to="/edit-profile" className="btn btn-light"
          ><i className="fas fa-user-circle text-primary"></i> Edit Profile</Link>
        <Link to="/post-video" className="btn btn-light"
          ><i className="fas fa-user-circle text-primary"></i>Post a Video</Link>
      </div>
    )
}

export default DashboardActions