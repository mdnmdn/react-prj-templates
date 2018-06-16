import React, { Component } from 'react';

import SampleCounter from './container/SampleCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get starta, edit asdsa <code>src/App.js</code> and save to reload.
        </p>
        <SampleCounter />
      </div>
    );
  }
}


export default App;
