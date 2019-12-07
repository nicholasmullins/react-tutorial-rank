import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // any time you want a component to interact with Redux, you have to bring in 'connect' and it has to be on the export too!

// we are destructuring that alerts prop we just made im mapStateToProps and by destructuring it. we don't have to use props.whatever every time
const Alert = ({ alerts }) =>
  alerts !== null && // making sure it's not null (has something in int)
  alerts.length > 0 && // and length is greater than zero and if both check out then we map it below and render it. 
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  // this would be props.alert.proptypes but we destructured it so we can
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  // this is getting the state from the action/alert and then we are mapping that state to props
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert); // when you use Redux, you bring in connect and in Export, you wrap your function name in parentheses and call connect()

// connect takes two parameters (state you want to map AND object with actions you want to use). We have no action object, but we are mapping to state(mapStatetoProps)
