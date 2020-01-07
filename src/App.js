import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      age: '',
      gender: '',
      destination: '',
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  }

  render() {
    return (
      <main>
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
          <input
            type='text'
            placeholder='age'
            name='age'
            value={this.state.age}
            onChange={this.handleChange}
          />
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
          <select
            name='destination'
            value={this.state.destination}
            onChange={this.handleChange}>
            <option value=''>Choose Destination</option>
            <option value='germany'>Germany</option>
            <option value='norway'>Norway</option>
            <option value='north-pole'>North Pole</option>
            <option value='south-pole'>South Pole</option>
          </select>
          <br />
          <label>
            <input
              type='checkbox'
              name='isVegan'
              onChange={this.handleChange}
              checked={this.state.isVegan}
            />
            Vegan?
          </label>
          <label>
            <input
              type='checkbox'
              name='isKosher'
              onChange={this.handleChange}
              checked={this.state.isKosher}
            />
            Kosher?
          </label>
          <label>
            <input
              type='checkbox'
              name='isLactoseFree'
              onChange={this.handleChange}
              checked={this.state.isLactoseFree}
            />
            LactoseFree?
          </label>
          <br />
          <button type='submit'>Submit</button>
        </form>
        <h2>Entered Information:</h2>
        <p>
          Your name: {this.state.firstname} {this.state.lastname}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <div>
          <span>Your dietary restrictions: </span>
          <br />
          Vegan: {this.state.isVegan ? 'Yes' : 'No'}
          <br />
          Kosher: {this.state.isKosher ? 'Yes' : 'No'}
          <br />
          LactoseFree: {this.state.isLactoseFree ? 'Yes' : 'No'}
          <br />
        </div>
      </main>
    );
  }
}

export default App;
