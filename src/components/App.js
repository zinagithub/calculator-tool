import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';
//import Logo from './index.png';
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
      <div className='headerCalc'>
          {/*<img src={Logo} alt = "Microverse" width='50' height='50' /> */}
          <p>Calculator</p> 
       </div> 
       <Display result={this.state.next} />
       <ButtonPanel  clickHandler = {this.handleClick} />
      </div>
    );
  }
}

export default App;
