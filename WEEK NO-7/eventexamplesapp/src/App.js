import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    incrementCount();
    sayHello();
 }
 
 function incrementCount() {
    setCount(count + 1);
  }

  function sayHello() {
    alert("Hello! You just increased the count.");
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  // ADD THIS FUNCTION
  function sayMessage(message) {
    alert(message);
  }
  function handlePress() {
    alert("I was clicked");
  }
  function App() {
    return (
      <div className="App">
        <CurrencyConvertor />
      </div>
    );
  }
  function App() {
    return (
      <div className="App">
        <CurrencyConvertor />
      </div>
    );
  }




  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => sayMessage("You pressed the message button!")}>
        Show Message
      </button>
      <button onClick={handlePress}>Click Me</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );

}

export default App;

