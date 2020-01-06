import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.isLoggedIn ? 'Logged In' : 'Logged Out'}</h1>{' '}
        <button onClick={this.handleClick}>
          {this.state.isLoggedIn ? 'Let me out' : 'Let me in'}
        </button>
      </div>
    );
  }
}

export default App;
