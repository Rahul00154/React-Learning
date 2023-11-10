import React from "react";

export default class Comp extends React.Component {
  componentWillUnmount() {
    alert("Component is going to unmount");
  }

  render() {
    return (
      <>
        <h1>extended component</h1>
        <h2>Child Component</h2>
        {/* We can access props in this way only in class Based Component */}
      </>
    );
  }
}
