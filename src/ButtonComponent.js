import React from 'react';

const ButtonComponent = (props) => {
  const handleDecrease = () => {
    return 'hello';
  };
  const handleRemove = () => {
    return 'hello';
  };
  debugger;
  return (
    <div>
      {props['count']}
      <button>Increase</button>
      <button onClick={() => handleDecrease()}>Decrease</button>
      <button onClick={() => handleRemove()}>Remove Button</button>
    </div>
  );
};
export default ButtonComponent;
