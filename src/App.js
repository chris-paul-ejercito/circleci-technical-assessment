import './App.css';
import React, { useContext } from 'react';
import Keys from './components/Keys'
import NumberProvider from './components/NumberProvider';
import { NumberContext } from './components/NumberProvider';

function App() {
  return (
    <NumberProvider>
      <div className="App">
        <Display />
        <Keys />
      </div>
    </NumberProvider>
  );
}

function Display() {
  const { number, storedNumber } = useContext(NumberContext);
  return (
    <div>
      <h1 className="display">{ !number.length && !storedNumber ? '0' : number || storedNumber}</h1>
      <h2 className="display">{ !storedNumber ? '' : `${storedNumber} + ${number}` }</h2>
    </div>    
  );
}

export default App;
