import React, { Component } from 'react';
import './App.css';
import Circles from '../src/components/Circles/Circles'
import CircleSelector from '../src/components/CircleSelector/CircleSelector'

class App extends Component {

  constructor() {
    super();
    this.state = {
      selected: 1
    }
  }

  circleChange = (Circle) =>{
    this.setState({
      selected: Circle
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
        <CircleSelector
          selected={this.state.selected}
          onChange={this.circleChange}
        />
        <Circles
          selected={this.state.selected}
        />
        </main>
      </div>
    );
  }
}

export default App;