import { createStore } from "redux";

const counterReducerFunction = (
  state = { counter: 0, showCounter: true },
  action
) => {
  if (action.type === "increment") {
    console.log("incremented");
    return {
      counter: state.counter + 1,
      showCounter: true,
    };
  }
  if (action.type === "decrement") {
    console.log("decremented");
    return {
      counter: state.counter - 1,
      showCounter: true,
    };
  }
  if (action.type === "boost") {
    console.log("boosted");
    return {
      counter: state.counter * action.amount,
      showCounter: true,
    };
  }
  if (action.type === "reset") {
    return {
      counter: 0,
      showCounter: true,
    };
  }
  if (action.type === "toggle") {
    console.log("toggled counter");
    return {
      counter: state.counter,
      showCounter:!(state.showCounter)

    };
  }
  return state;
};

const store = createStore(counterReducerFunction);

export default store;
