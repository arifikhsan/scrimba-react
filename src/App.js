import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            placeholder='firstname'
            name='firstname'
            onChange={this.handleChange}
          />
          <br />
          <input
            type='text'
            placeholder='lastname'
            name='lastname'
            onChange={this.handleChange}
          />
          <br />
          <h1>
            {this.state.firstname} {this.state.lastname}
          </h1>
        </form>
      </div>
    );
  }
}

export default App;
