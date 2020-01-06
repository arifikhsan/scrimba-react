```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))


import React from 'react'

import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

function App() {
  return (
    <Header />
    <MainContent />
    <Footer />
  )
}

export default App


// Header
import React from 'react'

function Header() {
  return (
    <nav>
      <h1>Hello a third time!</h1>
      <ul>
        <li>Thing 1</li>
        <li>Thing 2</li>
        <li>Thing 3</li>
      </ul>
    </nav>
  )
}

export default Header

// MainContent
import React from 'react'

function MainContent() {
  return (
    <main>
      <p>This is where most of my content will go...</p>
    </main>
  )
}

export default MainContent

// Footer
import React from 'react'

function Footer() {
  return (
    <footer>
      <h2>This is my footer element</h2>
    </footer>
  )
}

export default Footer

```
