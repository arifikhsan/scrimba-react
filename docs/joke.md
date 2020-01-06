```javascript

// index.js
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))


// App.js
import React from 'react'

import Joke from './Joke'

function App() {
  return (
    <div>
      <Joke />
      <Joke />
      <Joke />
      <Joke />
      <Joke />
    </div>
  )
}

export default App

// Joke.js
import React from 'react'

function Joke(props) {
  return (
    <div>
      <h3>Question: {props.question}</h3>
      <h3>Answer: {props.answer}</h3>
    </div>
  )
}

export default Joke

```
