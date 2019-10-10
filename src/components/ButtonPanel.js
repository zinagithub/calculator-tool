import React from 'react';
import Button from './Button';


class ButtonPanel extends React.Component {

  render() {
    return (
      <div className='buttonPanel'>
         {
            
         	['AC', '+/-', '%', '+',
             '7', '8', '9', 'X',
             '4', '5', '6', '-',
             '1', '2', '3', '/',
             '0', '.', '','='].map((elm, index) => {
         
             return (<Button key = {index} value = {elm}  />)
         })}

      </div>
    );
  }
}

export default ButtonPanel;
