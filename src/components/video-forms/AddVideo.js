import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addVideo } from '../../actions/video';

const VideoForm = ({ addVideo }) => {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    teacher: '',
    link: ''
  });

  const { title, desc, teacher, link } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addVideo(formData);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Post a Video</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Tell Us About the Video You Want to Share!
      </p>
      <small>* = required field</small>

      <form className='form' onSubmit={e => onSubmit(e)}> 

      <div className='form-group'>
          <input
            type='text'
            placeholder='Enter the YouTube URL'
            name='link'
            value={link}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Copy and Paste the YouTube URL - Do NOT use an Embed Link
          </small>
      </div>
      
      <div className='form-group'>
          <input
            type='text'
            placeholder='What is the title of your video?'
            name='title'
            value={title}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Write a straightforward and informative title 
          </small>
      </div>

      <div className='form-group'>
          <textarea
            placeholder='Brief description of the video?'
            name='desc'
            value={desc}
            onChange={e => onChange(e)}
          ></textarea>
          <small className='form-text'>Tell us a little about the video</small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='What is the name of the instructor?'
            name='teacher'
            value={teacher}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Please write the name of the teacher in the video
          </small>
      </div>

          <input type='submit' className='btn btn-dark my-1' value='Submit' />
        </form>
    </Fragment>
  );
};

VideoForm.propTypes = {
  addVideo: PropTypes.func.isRequired
};

export default connect(null, { addVideo })(VideoForm);
