import React, { useState, useEffect } from 'react';
import ButtonComponent from './ButtonComponent';

const MainComponent = () => {
  const [toggle, setToggle] = useState(0);

  const handleClick = () => {
    // let child component that all zero button has been triggered.
    // set 'count' back to zero ,
    // toggle back the button to false
    console.log('parent comp');
    setToggle(1);
    setToggle(0);
  };

  return (
    <div>
      {toggle}
      <button onClick={handleClick}>All zero</button>
      <button disabled={false}>Reset All button</button>
      <ButtonComponent toggle={toggle} />
      <ButtonComponent toggle={toggle} />
      <ButtonComponent toggle={toggle} />
      <ButtonComponent toggle={toggle} />
    </div>
  );
};

export default MainComponent;
