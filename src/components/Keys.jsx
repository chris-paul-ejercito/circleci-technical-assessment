import Key from './Key'
import AddKey from './AddKey';
import EqualsKey from './EqualsKey';

function Keys() {
  return (
    <div className="keys">
      <AddKey />
      <Key number={7}/>
      <Key number={8}/>
      <Key number={9}/>
      <Key number={4}/>
      <Key number={5}/>
      <Key number={6}/>
      <Key number={1}/>
      <Key number={2}/>
      <Key number={3}/>
      <Key number={0}/>
      <EqualsKey />
    </div>
  );
}

export default Keys;