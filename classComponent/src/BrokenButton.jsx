import React from "react";

export default class BrokenButton extends React.Component {
  // handleClick() {
  //   alert(this); //here this points to undefined bacause this has nothing to do with class it only work with object
  //   this.setState({ backgroundColor: "red" });
  // }

  render() {
    return (
      <button
        onClick={() => this.setState({ backgroundColor: "blue" })}
        style={this.state}
      >
        Set BackGround To Blue
      </button>
    );
  }
}
