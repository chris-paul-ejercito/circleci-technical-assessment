import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

function AddKey() {
  const { handleAddButton } = useContext(NumberContext);
  return (
    <button type="button" className="addKey"
      onClick={() => handleAddButton()}>
        +
    </button>
  );
}

export default AddKey;