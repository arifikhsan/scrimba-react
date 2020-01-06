import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      isFriendly: true,
      gender: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
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
          <textarea value={'Some default value'} onChange={this.handleChange} />
          <br />
          <label>
            <input
              type='checkbox'
              name='isFriendly'
              checked={this.state.isFriendly}
              onChange={this.handleChange}
            />
            Is friendly?
          </label>
          <br />

          <label>
            <input
              type='radio'
              name='gender'
              value='male'
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
            />
            Male
          </label>
          <br />
          <label>
            <input
              type='radio'
              name='gender'
              value='female'
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
            />
            Female
          </label>
          <br />

          <h1>
            {this.state.firstname} {this.state.lastname}
          </h1>
          <h2>You are a {this.state.gender}</h2>
        </form>
      </div>
    );
  }
}

export default App;
