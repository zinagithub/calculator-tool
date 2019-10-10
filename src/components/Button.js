import React from 'react';
import PropTypes from 'prop-types';


class Button extends React.Component {

  render() {
    return (
         <button className = 'butCal' > {this.props.value} </button>     
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired
}
export default Button;
