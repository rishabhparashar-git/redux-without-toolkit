import { useDispatch, useSelector } from "react-redux"; //for Functional Component

import classes from "./Counter.module.css";

const FunctionalCounter = () => {
  const { counter, showCounter } = useSelector((state) => state);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  const resetCounterHandler = () => {
    dispatch({ type: "reset" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter (Functional Component)</h1>
      <div className={classes.value}>{showCounter ? counter : ""}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={toggleCounterHandler}>Toggle</button>
      <button onClick={resetCounterHandler}>Reset</button>
      <button onClick={decrementHandler}>Decrement</button>
    </main>
  );
};

export default FunctionalCounter;
