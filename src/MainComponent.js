import React, { useState, useEffect } from 'react';
import ButtonComponent from './ButtonComponent';

const MainComponent = () => {
  const [count, setCount] = useState(0);
  const [zero, setZero] = useState(false);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleClick = () => {
    setZero(true);
  };

  return (
    <div>
      <button onClick={handleClick}>All zero</button>
      <button disabled={false}>Reset All button</button>
      <ButtonComponent handleCount={handleCount} zero={zero} />
      <ButtonComponent handleCount={handleCount} zero={zero} />
      <ButtonComponent handleCount={handleCount} zero={zero} />
      <ButtonComponent handleCount={handleCount} zero={zero} />
    </div>
  );
};

export default MainComponent;
