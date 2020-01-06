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
    this.setState(previousState => {
      return {
        isLoggedIn: !previousState.isLoggedIn
      };
    });
  }

  render() {
    let headingText = this.state.isLoggedIn ? 'Logged In' : 'Logged Out';
    let buttonText = this.state.isLoggedIn ? 'Let me out' : 'Let me in';
    
    return (
      <div>
        <h1>{headingText}</h1>
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
