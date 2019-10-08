import React from 'react';
import Button from './Button';


class ButtonPanel extends React.Component {
constructor () {
    super();
    this.state = {
      panelElm : ['AC', '+/-', '%', '+',
                  '7', '8', '9', 'X',
                  '4', '5', '6', '-',
                  '1', '2', '3', '+',
                  '0', '.', '','=']
    }
  }	

  render() {
    return (
      <div className='buttonPanel'>
         {this.state.panelElm.map((elm) => {
         
             return (<Button value = {elm}  />)
         })}

      </div>
    );
  }
}

export default ButtonPanel;
