import { useState } from "react";
import "./App.css";

export default function Comptador() {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    if (count >= 10) setCount(10);
  };

  const decrement = () => {
    setCount(count - 1);
    if (count === 0) setCount(0);
  };

  const five = () => {
    if (count + 5 >= 11) setCount(10);
    else setCount(count + 5);
    console.log(count);
  };

  return (
    <>
      <div className="content">
        <div className="marc">
          <div className="display">
            Comptador: ${count}.<br />
          </div>
          <div>
            <button onClick={increment}>+1</button>
          </div>
          <div>
            <button onClick={decrement}>-1</button>
          </div>
          <div>
            <button onClick={five}>+5</button>
          </div>
        </div>
      </div>
    </>
  );
}
