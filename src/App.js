import React, { Component } from 'react';

import {
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

function Home () {
  return (
    <h1>HOME</h1>
  )
}

function Topics () {
  return (
    <h1>TOPICS</h1>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/topics'}>Topics</Link></li>
          </ul>

          <hr />

          <Route exact path={'/'} component={Home} />
          <Route path={'/topics'} component={Topics} />
        </div>
      </Router>
    );
  }
}

export default App;
