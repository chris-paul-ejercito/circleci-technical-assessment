import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

function Key({ number }) {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button type="button" className="key"
      onClick={() => handleSetDisplayValue(number)}>
        { number }
    </button>
  );
}

export default Key;