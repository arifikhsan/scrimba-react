import React, { Component } from 'react';

class App extends Component {
  state = {
    name: 'Arif Ikhsanudin'
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
        <br />
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default App;
