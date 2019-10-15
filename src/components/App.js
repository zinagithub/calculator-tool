import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate'
import './App.css';


class App extends React.Component {

  render() {
    return (
      <div className='Container'>
         
       <Display result = '0' />
       <ButtonPanel  />
      </div>
    );
  }
}

export default App;
