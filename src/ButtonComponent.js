import React from 'react';

const ButtonComponent = (props) => {
  return (
    <div>
      {props['counter']['count']}
      <button onClick={() => props.handleIncrease}>Increase</button>
      <button onClick={props.handleDecrease}>Decrease</button>
      <button onClick={props.handleRemove}>Remove Button</button>
    </div>
  );
};
export default ButtonComponent;
