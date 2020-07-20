import React, { Component } from 'react';

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
        <div className='button'>
          Number #{this.state.count}
          <button onClick={this.handleClick}>
            This is button for increasing.Number.
          </button>
          Number #{this.state.count}
          <button>This is button for decreasing</button>
          <button>This is button for deleting</button>
        </div>
      </div>
    );
  }
}

export default MainComponent;
