import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br/>
        {this.state.name}
      </div>
    );
  }
}

export default App;
