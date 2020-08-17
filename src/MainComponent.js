import React, { useState, useEffect, Component } from 'react';
import ButtonComponent from './ButtonComponent';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: [
        { id: 0, count: 0 },
        { id: 1, count: 0 },
        { id: 2, count: 0 },
        { id: 3, count: 0 },
      ],
    };
  }
  render() {
    return (
      <div>
        <button>All zero</button>
        <button disabled={false}>Reset All button</button>
        <ButtonComponent firstCount={this.state['counter'][0]} />
        <ButtonComponent secondCount={this.state['counter'][1]} />
        <ButtonComponent thirdCount={this.state['counter'][2]} />
        <ButtonComponent fourthCount={this.state['counter'][3]} />
      </div>
    );
  }
}

export default MainComponent;
