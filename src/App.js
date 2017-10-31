import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function getRandomInt() {
  return Math.floor(Math.random() * 256);
}

function getRGB(r, g, b) {
  return "rgb(" + r + "," + g + "," + b + ")";
}

class AwesomeValue extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value;
  }

  render() {
    return (
      <div
        onClick={this.props.onClick}
        style={{height: '200px', width: 'auto', background: getRGB(getRandomInt(), getRandomInt(), getRandomInt())}}
      >
        {`${this.props.text}: ${this.props.value}`}
      </div>
    )
  }
}

class App extends Component {
  state = {goodValue: 0, badValue: 0};

  goodValueHandler = () => {
    this.setState({goodValue: this.state.goodValue + 1});
  };

  badValueHandler = () => {
    this.setState({badValue: this.state.badValue + 1});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AwesomeValue text="Good Value" value={this.state.goodValue} onClick={this.goodValueHandler} />
        <AwesomeValue text="Bad Value" value={this.state.badValue} onClick={this.badValueHandler} />
      </div>
    );
  }
}

export default App;
