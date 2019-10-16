import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate'
import './App.css';


class App extends React.Component {
	state = {
		total: '0',
        next: '0',
        operation: '',
        displayResult : false,
	}
    handleClick = (buttonName) => {
        this.setState(changeState => Calculate(changeState, buttonName))
    }
  render() {
    return (
      <div className='Container'>
         
       <Display result={this.state.next} />
       <ButtonPanel  clickHandler = {this.handleClick} />
      </div>
    );
  }
}

export default App;
