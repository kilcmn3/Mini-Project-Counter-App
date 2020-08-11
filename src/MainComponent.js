import React, { useState, useEffect } from 'react';
import ButtonComponent from './ButtonComponent';

const MainComponent = () => {
  const [remove, setRemove] = useState(true);

  return (
    <div>
      <ButtonComponent remove={remove} />
      <ButtonComponent remove={remove} />
      <ButtonComponent remove={remove} />
      <ButtonComponent remove={remove} />
    </div>
  );
};

export default MainComponent;
