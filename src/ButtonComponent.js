import React, { useState, useEffect } from 'react';

const ButtonComponent = (props) => {
  const handleDecrease = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const handleRemove = () => {
    setRemove(false);
  };
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => handleDecrease()}>Decrease</button>
      <button onClick={() => handleRemove()}>Remove Button</button>
    </div>
  );
};
export default ButtonComponent;
