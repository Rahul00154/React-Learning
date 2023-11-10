import { useState, Component } from "react";
import BrokenButton from "./BrokenButton";
import PropChangeCounter from "./PropChangeCounter";
// import Comp from "./Comp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  //it creates object through class

  // constructor(props) {
  //   super(props); //we use super keyword when we accept any props in component
  //   this.state = {
  //     count: 0,
  //   };
  //   //we bind method inside constructor

  //   this.Increment = this.Increment.bind(this);
  // }

  //State in class using class field
  // state = {
  //   name: "",
  //   count: 0,
  //   // prevName: "",
  //   show: true,
  // };

  // //in classfield we use arrow function to manipulate thing
  // Increment() {
  //   this.setState((prevState) => ({
  //     count: prevState.count + 1,
  //   }));
  // }

  // //lifeCycleMethod in class Based Component
  // //ComponentDidMount
  // //ComponentDidUpdate
  // //ComponentWillUnmount

  // //in strict mode it will print two times because in react Because strictMode renders component twice on dev but not in production to check any problem with the code

  // //it is run when component load on web
  // componentDidMount() {
  //   this.setState({ count: 10 });
  //   console.log("Component Created");
  // }

  // //when something rerender on webpage then componentDidUpdate run
  // //we give condition in componentDidUpdate if we not provide any condition then it will cause infinite rerender

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("DidUpdate Called");
  //   if (prevState.name != this.state.name) {
  //     this.setState({ prevName: prevState.name });
  //   }
  // }

  render() {
    // let child;
    // if (this.state.show) {
    //   child = <Comp />;
    // }

    return (
      <div>
        {/* <h1>Learning Class Based Component</h1>
        <h2>Class Base component</h2>
        {/* <Comp name={"rahulAnand"} /> */}
        {/* <h2>{this.state.name}</h2> */}
        {/* <h2>{this.state.prevName}</h2> */}
        {/* <h2>{this.state.count}</h2> */}
        {/* {/* <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        /> */}
        {/* <button onClick={this.Increment}>Increase Count</button> */}
        {/* {child}
        <button onClick={() => this.setState({ show: false })}>
          DeleteComp
        </button> */}
        {/* Passing props in class based component */}

        {/* <BrokenButton /> */}

        <input
          placeholder="Email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />

        <PropChangeCounter
          constant={"this doesn't change"}
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
      </div>
    );
  }
}

export default App;
