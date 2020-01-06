import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            placeholder='firstname'
            name='firstname'
            value={this.state.firstname}
            onChange={this.handleChange}
          />
          <br />
          <input
            type='text'
            placeholder='lastname'
            name='lastname'
            value={this.state.lastname}
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
