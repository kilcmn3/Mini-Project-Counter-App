import React from 'react';

const ButtonComponent = (props) => {
  const count = props['counter'];
  return (
    <div>
      {count['count']}
      <button onClick={(e) => props.handleIncrease(e, count)}>Increase</button>
      <button onClick={props.handleDecrease}>Decrease</button>
      <button onClick={props.handleRemove}>Remove Button</button>
    </div>
  );
};
export default ButtonComponent;
