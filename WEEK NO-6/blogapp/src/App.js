import React from 'react';
import './App.css';
import Posts from './Posts'; // ✅ Import the Posts component

function App() {
  return (
    <div className="App">
      <Posts /> {/* ✅ Use the Posts component */}
    </div>
  );
}

export default App;

