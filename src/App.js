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

  state = {
    value: 0
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.value !== nextState.value;
  }

  clickHandler = () => {
    console.log('clikcing!');
    this.setState({value: this.state.value + 1});
  };

  render() {
    return (
      <div
        onClick={() => {
          this.props.onClick();
          this.clickHandler();
        }}
        style={{height: '200px', width: 'auto', background: getRGB(getRandomInt(), getRandomInt(), getRandomInt())}}
      >
        {this.state.value}
      </div>
    )
  }
}

class App extends Component {
  state = {value: 0}

  clickHandler = () => {
    this.setState({value: this.state.value + 1});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{height: '100px', width: 'auto', background: getRGB(getRandomInt(), getRandomInt(), getRandomInt())}}>
          {this.state.value}
        </div>
        <AwesomeValue onClick={this.clickHandler} />
        <AwesomeValue onClick={this.clickHandler} />
        <AwesomeValue onClick={this.clickHandler} />
      </div>
    );
  }
}

export default App;
