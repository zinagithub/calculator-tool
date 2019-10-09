import React from 'react';


class Display extends React.Component {

  render() {
    return (
      <div className='display'>
         <p> {this.props.result} </p>

      </div>
    )
  }
}

Display.defaultProps = {
  result: '0',
};


export default Display;
