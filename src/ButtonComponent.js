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

  console.log(remove);
  return remove ? (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => handleDecrease()}>Decrease</button>
      <button onClick={() => setRemove(false)}>Remove Button</button>
    </div>
  ) : (
    false
  );
};
export default ButtonComponent;
