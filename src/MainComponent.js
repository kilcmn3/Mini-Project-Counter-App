import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent';
class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = (event) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <ButtonComponent />
      </div>
    );
  }
}

export default MainComponent;
