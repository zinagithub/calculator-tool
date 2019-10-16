import React from 'react';
import PropTypes from 'prop-types';


class Button extends React.Component {

  render() {
  	let myColor = this.props.Color;
  	let myClass= 'butCal1';
    let clickHandler = this.props.clickHandler;
    let name = this.props.value;
  	if (this.props.Wide){
  		 myClass= 'butCal2';
  	}
  	if (myColor === '1'){
  		myClass += ' butBackground1'
  	}else{
        myClass += ' butBackground2'
  	}
    return (   	
         <button className = {myClass} onClick={() => clickHandler({name})}> {name} </button>     
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired
}
export default Button;
