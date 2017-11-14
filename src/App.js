import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

function getRandomInt() {
  return Math.floor(Math.random() * 256);
}

function getRGB(r, g, b) {
  return "rgb(" + r + "," + g + "," + b + ")";
}

function getRandomColor() {
  return getRGB(getRandomInt(), getRandomInt(), getRandomInt());
}

class CoolDiv extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value;
  }

  render() { return (
    <div style={{width: 'auto', height: '100px', background: getRandomColor()}}>
      {this.props.value}
    </div>
  )}
}

class App extends Component {
  state = {clicks: 0, someRandomValue: 0}

  clickHandler= increment => { this.setState({clicks: this.state.clicks + increment}) }
  clickHandler2= increment => { this.setState({someRandomValue: this.state.someRandomValue + 1}) }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{width: 'auto', height: '20px', background: 'grey'}} onClick={() => this.clickHandler(1)} />
        <div style={{width: 'auto', height: '20px', background: 'red'}} onClick={() => this.clickHandler2(1)} />
        <CoolDiv onClick={() => undefined} value={this.state.clicks} />
      </div>
    );
  }
}

export default App;
