import { Component } from "react";
import { connect } from "react-redux";

import classes from "./Counter.module.css";

class ClassCounter extends Component {
  incrementHandler() {
    this.props.incrementHandler();
  }
  decrementHandler() {
    this.props.decrementHandler();
  }
  boostHandler() {
    this.props.boostHandler();
  }
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter (Class Component)</h1>
        <div className={classes.value}>{this.props.counter}</div>
        {/* <button onClick={toggleCounterHandler}>Toggle Counter</button> */}
        <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        <button onClick={this.boostHandler.bind(this)}>Boost</button>
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    incrementHandler: () => {
      dispatch({ type: "increment" });
    },
    decrementHandler: () => {
      dispatch({ type: "decrement" });
    },
    boostHandler: () => {
      dispatch({ type: "boost", amount: 10 });
      console.log("boost button dispatched");
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);
