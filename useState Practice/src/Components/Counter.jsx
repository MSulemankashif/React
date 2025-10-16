import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function reset() {
        setCount(0);
    }

    function decrement() {
        if(count > 0) {
            setCount(count - 1);
        }else{
            alert("Count cannot be less then zero");
        }
    }

  return (
    <>
    <h1>Count {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
  )
}

export default Counter