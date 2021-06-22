import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-gray-500">
          Page has been open for <code>{count}</code> seconds.
        </p>
        <h1>Styled by Tailwind</h1>
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
    </div>
  );
}

export default App;