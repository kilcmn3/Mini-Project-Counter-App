import React, { useState, useEffect } from 'react';

const ButtonComponent = () => {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => handleDecrease()}>Decrease</button>
    </div>
  );
};
export default ButtonComponent;
