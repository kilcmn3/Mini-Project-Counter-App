import React, { useState } from 'react';

const ButtonComponent = (props) => {
  const count = props['counter'];

  return count['toggle'] ? (
    <div>
      {count['count']}
      <button onClick={(e) => props.handleIncrease(e, count)}>Increase</button>
      <button onClick={(e) => props.handleDecrease(e, count)}>Decrease</button>
      <button onClick={(e) => props.handleRemove(e, count)}>
        Remove Button
      </button>
    </div>
  ) : (
    count['toggle']
  );
};
export default ButtonComponent;
