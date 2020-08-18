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
      toggle: true,
    };
  }
  handleIncrease = (e, n) => {
    let newstate = this.state.counter.map((target) => {
      if (target.id === n.id) {
        target.count++;
      }
      return target;
    });
    this.setState({ counter: newstate });
  };

  handleDecrease = (e, n) => {
    let newstate = this.state.counter.map((target) => {
      if (target.id === n.id) {
        if (target.count === 0) {
          target.count = 0;
        } else {
          target.count--;
        }
      }
      return target;
    });
    this.setState({ counter: newstate });
  };

  render() {
    return (
      <div>
        <button>All zero</button>
        <button disabled={!this.state.toggle}>Reset All button</button>
        <ButtonComponent
          counter={this.state['counter'][0]}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          toggle={this.state.toggle}
        />
        <ButtonComponent
          counter={this.state['counter'][1]}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          toggle={this.state.toggle}
        />
        <ButtonComponent
          counter={this.state['counter'][2]}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          toggle={this.state.toggle}
        />
        <ButtonComponent
          counter={this.state['counter'][3]}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          toggle={this.state.toggle}
        />
      </div>
    );
  }
}

export default MainComponent;
