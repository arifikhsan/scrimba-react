import React, { Component } from 'react';
import Conditional from './Conditional';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3500);
  }

  render() {
    return this.state.loading ? <h1>Loading...</h1> : <Conditional />;
  }
}

export default App;
