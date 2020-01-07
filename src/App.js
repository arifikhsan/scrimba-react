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
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({
          dietaryRestrictions: {
            [name]: checked
          }
        })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <main>
        <form>
          <input
            type='text'
            placeholder='firstname'
            name=''
            value={this.state.firstname}
            onChange={this.handleChange}
          />
          <br />
          <input
            type='text'
            placeholder='lastname'
            name=''
            value={this.state.lastname}
            onChange={this.handleChange}
          />
          <br />
          <input
            type='text'
            placeholder='age'
            name=''
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
            />
            Male
          </label>
          <label>
            <input
              type='radio'
              name='gender'
              value='female'
              checked={this.state.gender === 'female'}
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
              checked={this.state.dietaryRestrictions.isVegan}
            />
            Vegan?
            <input
              type='checkbox'
              name='isKosher'
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isKosher}
            />
            Kosher?
            <input
              type='checkbox'
              name='isLactoseFree'
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isLactoseFree}
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
        <p>
          <span>Your dietary restrictions: </span>
          <p>dietary</p>
        </p>
      </main>
    );
  }
}

export default App;
