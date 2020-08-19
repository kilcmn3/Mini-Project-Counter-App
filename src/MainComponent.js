import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: [
        { id: 0, count: 0, toggle: true },
        { id: 1, count: 0, toggle: true },
        { id: 2, count: 0, toggle: true },
        { id: 3, count: 0, toggle: true },
      ],
      toggleCount: 0,
    };
  }
  handleIncrease = (e, n) => {
    let newState = this.state.counter.map((target) => {
      if (target.id === n.id) {
        target.count++;
      }
      return target;
    });
    this.setState({ counter: newState });
  };

  handleDecrease = (e, n) => {
    let newState = this.state.counter.map((target) => {
      if (target.id === n.id) {
        if (target.count === 0) {
          target.count = 0;
        } else {
          target.count--;
        }
      }
      return target;
    });
    this.setState({ counter: newState });
  };

  handleRemove = (e, n) => {
    let newState = this.state.counter.map((target) => {
      if (target.id === n.id) {
        target.toggle = false;
      }
      return target;
    });
    this.setState((prevState) => {
      return {
        counter: newState,
        toggleCount: prevState.toggleCount + 1,
      };
    });
  };

  handleReset = () => {
    let newState = this.state.counter.map((target) => {
      target.toggle = true;
      return target;
    });
    this.setState({ counter: newState, toggleCount: 0 });
  };
  render() {
    return (
      <div>
        <button>All zero</button>
        <button
          disabled={this.state.toggleCount < 4 ? true : false}
          onClick={this.handleReset}>
          Reset All button
        </button>
        <ButtonComponent
          counter={this.state['counter'][0]}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          handleRemove={this.handleRemove}
        />
        <ButtonComponent
          counter={this.state['counter'][1]}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          handleRemove={this.handleRemove}
        />
        <ButtonComponent
          counter={this.state['counter'][2]}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          handleRemove={this.handleRemove}
        />
        <ButtonComponent
          counter={this.state['counter'][3]}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default MainComponent;
