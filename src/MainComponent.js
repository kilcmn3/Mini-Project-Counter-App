import React, { useState, useEffect, Component } from 'react';
import ButtonComponent from './ButtonComponent';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: [
        { id: 0, count: 0 },
        { id: 1, count: 1 },
      ],
    };
  }
  render() {
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
  }
}

export default MainComponent;
