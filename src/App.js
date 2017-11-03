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

class CoolDiv extends PureComponent {
  shouldComponentUpdate
  render() {
    return (<div onClick={this.props.onClick} style={{width:'auto', height: '50px', backgroundColor: getRandomColor()}}>
      {`Click count: ${this.props.clickCount}`}
    </div>);
  }
}

class App extends Component {
  state = {totalClicks: 0}

  clickHandler = () => {this.setState({totalClicks: this.state.totalClicks + 1});}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CoolDiv onClick={this.clickHandler} clickCount={this.state.totalClicks} />
      </div>
    );
  }
}

export default App;
