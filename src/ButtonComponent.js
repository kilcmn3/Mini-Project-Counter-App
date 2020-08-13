import React, { useState, useEffect } from 'react';

const ButtonComponent = (props) => {
  const [count, setCount] = useState(0);
  const [remove, setRemove] = useState(true);

  const handleDecrease = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const backToZero = () => {
    setCount(0);
    return count;
  };

  const handleRemove = () => {
    setRemove(false);
    props.handleCount();
  };

  return remove ? (
    <div>
      {props.zero ? backToZero() : count}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => handleDecrease()}>Decrease</button>
      <button onClick={() => handleRemove()}>Remove Button</button>
    </div>
  ) : (
    false
  );
};
export default ButtonComponent;
