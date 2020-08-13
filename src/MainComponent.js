import React, { useState, useEffect } from 'react';
import ButtonComponent from './ButtonComponent';

const MainComponent = () => {
  const [zero, setZero] = useState(false);

  useEffect(() => {
    return () => {
      setZero(false);
    };
  }, [zero]);

  return (
    <div>
      <button onClick={() => setZero(true)}>All zero</button>
      <button disabled={false}>Reset All button</button>
      <ButtonComponent zero={zero} />
      <ButtonComponent zero={zero} />
      <ButtonComponent zero={zero} />
      <ButtonComponent zero={zero} />
    </div>
  );
};

export default MainComponent;
