import React, { Component } from 'react';

export default class MemeGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'https://i.imgflip.com/1bij.jpg',
      memes: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form className='meme-form'>
          <input
            type='text'
            placeholder='Top text'
            name='topText'
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type='text'
            placeholder='Bottom text'
            name='bottomText'
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>
        <div className='meme'>
          <img src={this.state.randomImage} alt='' />
          <h2 className='top'>{this.state.topText}</h2>
          <h2 className='bottom'>{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}
