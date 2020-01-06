```javascript
import React, {Component} from 'react'

class App extends Component {
  constructor() {
      super()
      this.state = {
          name: 'sally',
          age: 13
      }
  }

  render() {
      return (
          <div>
            {this.state.name}
          </div>
          <div>
            {this.state.age}
          </div>
      )
  }
}


import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        let wordDisplay;
        if (this.state.wordDisplay) {
            wordDisplay = 'in'
        } else {
            wordDisplay = 'out'
        }

        return {
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        }
    }
}
```
