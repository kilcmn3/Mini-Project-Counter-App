import React, { useState, useEffect } from 'react';
import ButtonComponent from './ButtonComponent';

const MainComponent = () => {
  const [count, setCount] = useState(0);
  const [zero, setZero] = useState(false);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleClick = () => {
    setCount(true);
  };

  return (
    <div>
      <button onClick={handleClick}>All zero</button>
      <button disabled={false}>Reset All button</button>
      <ButtonComponent handleCount={handleCount} />
      <ButtonComponent handleCount={handleCount} />
      <ButtonComponent handleCount={handleCount} />
      <ButtonComponent handleCount={handleCount} />
    </div>
  );
};

export default MainComponent;
