import React, { useState, useEffect } from 'react';
import ButtonComponent from './ButtonComponent';

const MainComponent = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button>All zero</button>
      <button disabled={false}>Reset All button</button>
      <ButtonComponent handleCount={handleCount} />
      <ButtonComponent handleCount={handleCount} />
      <ButtonComponent handleCount={handleCount} />
      <ButtonComponent handleCount={handleCount} />
    </div>
  );
};

export default MainComponent;
