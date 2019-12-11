import React, { useState } from 'react'; // we are bringing in useState because this is a form and will need to useState (sending it to the reducer which holds state)
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addReview } from '../../actions/video';

const ReviewForm = ({ videoId, addReview }) => {
  const [text, setText] = useState('');

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Leave a Review</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addReview(videoId, { text });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Write A Review'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

ReviewForm.propTypes = {
  addReview: PropTypes.func.isRequired
};

export default connect(null, { addReview })(ReviewForm);
