import React from 'react';

function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          type='text'
          placeholder='firstname'
          name='firstname'
          value={props.firstname}
          onChange={props.handleChange}
        />
        <br />
        <input
          type='text'
          placeholder='lastname'
          name='lastname'
          value={props.lastname}
          onChange={props.handleChange}
        />
        <br />
        <input
          type='text'
          placeholder='age'
          name='age'
          value={props.age}
          onChange={props.handleChange}
        />
        <br />
        <label>
          <input
            type='radio'
            name='gender'
            value='male'
            checked={props.gender === 'male'}
            onChange={props.handleChange}
          />
          Male
        </label>
        <label>
          <input
            type='radio'
            name='gender'
            value='female'
            checked={props.gender === 'female'}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />
        <select
          name='destination'
          value={props.destination}
          onChange={props.handleChange}>
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
            onChange={props.handleChange}
            checked={props.isVegan}
          />
          Vegan?
        </label>
        <label>
          <input
            type='checkbox'
            name='isKosher'
            onChange={props.handleChange}
            checked={props.isKosher}
          />
          Kosher?
        </label>
        <label>
          <input
            type='checkbox'
            name='isLactoseFree'
            onChange={props.handleChange}
            checked={props.isLactoseFree}
          />
          LactoseFree?
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
      <h2>Entered Information:</h2>
      <p>
        Your name: {props.firstname} {props.lastname}
      </p>
      <p>Your age: {props.age}</p>
      <p>Your gender: {props.gender}</p>
      <p>Your destination: {props.destination}</p>
      <div>
        <span>Your dietary restrictions: </span>
        <br />
        Vegan: {props.isVegan ? 'Yes' : 'No'}
        <br />
        Kosher: {props.isKosher ? 'Yes' : 'No'}
        <br />
        LactoseFree: {props.isLactoseFree ? 'Yes' : 'No'}
        <br />
      </div>
    </main>
  );
}

export default FormComponent;
