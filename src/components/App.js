import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';


class App extends React.Component {

  render() {
    return (
      <div className='Container'>
         
       <Display result  />
       <ButtonPanel  />
      </div>
    );
  }
}

export default App;
