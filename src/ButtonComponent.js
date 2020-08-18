import React, { useState } from 'react';

const ButtonComponent = (props) => {
  const count = props['counter'];
  const [toggle, setToggle] = useState(props.toggle);

  return toggle ? (
    <div>
      {count['count']}
      <button onClick={(e) => props.handleIncrease(e, count)}>Increase</button>
      <button onClick={(e) => props.handleDecrease(e, count)}>Decrease</button>
      <button onClick={() => setToggle(!toggle)}>Remove Button</button>
    </div>
  ) : (
    toggle
  );
};
export default ButtonComponent;
