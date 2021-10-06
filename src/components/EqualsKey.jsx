import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

function EqualsKey() {
  const { calculate } = useContext(NumberContext);
  return (
    <button type="button" className="EqualsKey"
      onClick={() => calculate()}>
        =
    </button>
  );
}

export default EqualsKey;