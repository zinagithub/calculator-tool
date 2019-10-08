import React from 'react';

class Display extends React.Component {
	constructor () {
    super();
    this.state = {
      result : 0,
    }
  }

  render() {
    return (
      <div className='display'>
         <p> {this.state.result} </p>

      </div>
    )
}
}

export default Display;
