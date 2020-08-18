import React, { Component } from 'react';
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
  handleIncrease = (e, n) => {
    this.setState((prevState) => {
      return prevState.counter.map((target) => {
        if (target.id === n.id) {
          target.count = target.count + 1;
        }
        return target;
      });
    });
  };
  render() {
    return (
      <div>
        <button>All zero</button>
        <button disabled={false}>Reset All button</button>
        <ButtonComponent
          counter={this.state['counter'][0]}
          handleIncrease={this.handleIncrease}
        />
        <ButtonComponent
          counter={this.state['counter'][1]}
          handleIncrease={this.handleIncrease}
        />
        <ButtonComponent
          counter={this.state['counter'][2]}
          handleIncrease={this.handleIncrease}
        />
        <ButtonComponent
          counter={this.state['counter'][3]}
          handleIncrease={this.handleIncrease}
        />
      </div>
    );
  }
}

export default MainComponent;
