import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    error: '',
  };

  static getDerivedStateFromError(error) {
    return {
      error: error,
    };
  }

  componentDidCatch(error, info) {
    console.log(`Error is :${error}`);
    console.log(`Info is : ${info}`);
  }

  // Now we Implement Fallback Ui for displaying error
  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Some Error Occured. . .</h2>
        </div>
      );
    }
    return this.props.children;
  }
}
