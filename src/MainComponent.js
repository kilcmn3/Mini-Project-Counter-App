import React, { useState, useEffect } from 'react';
import ButtonComponent from './ButtonComponent';

const MainComponent = () => {
  return (
    <div>
      <button>All zero</button>
      <button disabled={false}>Reset All button</button>
      <ButtonComponent />
      <ButtonComponent />
      <ButtonComponent />
      <ButtonComponent />
    </div>
  );
};

export default MainComponent;
