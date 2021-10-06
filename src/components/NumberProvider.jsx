import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const [number, setNumber] = useState('0');
  const [storedNumber, setStoredNumber] = useState('');

  function handleSetDisplayValue(num) {
    if (number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, '')}`);
    }
  }

  function handleSetStoredValue() {
    setStoredNumber(number);
    setNumber('');
  }

  function handleAddButton() {
    if (number) {
      handleSetStoredValue();
    }
  }

  function calculate() {
    if (number && storedNumber) {
      setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);
      setNumber('');
    }
  }

  return (
    <NumberContext.Provider
      value={{
        number, setNumber,
        storedNumber, setStoredNumber,
        handleSetDisplayValue,
        handleSetStoredValue,
        handleAddButton,
        calculate,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;