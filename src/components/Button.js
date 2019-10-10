import React from 'react';


class Button extends React.Component {

  render() {
    return (
      
         <button className = 'butCal' > {this.props.value} </button>
         
      
    );
  }
}

export default Button;
