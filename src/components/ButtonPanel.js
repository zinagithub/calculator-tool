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
             '0', '.','='].map((elm, index) => {
             	var wide  = false;
  	            var color = '1';
                       if (elm === '0'){
                          wide = true;
                       }
                       if (isNaN(parseInt(elm, 10))) {
                       	 color = '2'
                       }

             return (<Button key = {index} value = {elm}  Wide = {wide} Color = {color} />)
           })
         }

      </div>
    );
  }
}

export default ButtonPanel;
