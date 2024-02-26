import React, { Component } from 'react';

class Counter1 extends Component {
  render() {
    if (this.props.value > 3) {
      throw new Error('Too Many Counts. . . ');
    }
    return (
      <div>
        <h2>Counter 1 is : </h2>
        <h3>{this.props.value}</h3>
        <button onClick={this.props.onClick}>Add</button>
      </div>
    );
  }
}

export default Counter1;
