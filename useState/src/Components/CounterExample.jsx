import React, { useState } from 'react'

function CounterExample() {

    var [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }
    function reset() {
        setCounter(counter = 0);
    }
    function decrement() {
        if(counter > 0) {
            setCounter(counter - 1);
        }else{
            alert("Counter cannot be negative");
        }
    }

  return (
    <>
        <h1>Counter : {counter}</h1>
        <br />
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}

export default CounterExample