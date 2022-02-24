import { useReducer } from "react";

const INCREMENT = "INCREMENT";
function increment(amount) {
  return { type: INCREMENT, amount };
}

const RESET = "RESET";
function reset() {
  return { type: RESET };
}

function CounterRedux() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case INCREMENT:
        return state + action.amount;
      case RESET:
        return 0;
      default:
        return state;
    }
  }, 0);

  return (
    <>
      <h1>Counter Redux</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment(+1))}>+1</button>
      <button onClick={() => dispatch(increment(-1))}>-1</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </>
  );
}
export default CounterRedux;
