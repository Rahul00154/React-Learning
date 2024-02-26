import React, { Component } from 'react';

class Counter2 extends Component {
  render() {
    return (
      <div>
        <h2>Counter 2 is :</h2>
        <h3>{this.props.value}</h3>
        <button onClick={this.props.onClick}>Add</button>
      </div>
    );
  }
}

export default Counter2;
