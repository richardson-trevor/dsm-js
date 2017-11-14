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

function Nester({maxDepth, depth}) {
  if (depth > maxDepth) {
    return <div />;
  } else {
    return (
      <div style={{padding: '10px', width: 'auto', height: 'auto', background: getRandomColor()}}>
        <Nester maxDepth={maxDepth} depth={depth + 1} />
      </div>
    );
  }
}

class CoolDiv extends PureComponent {
  render() {
    return (
      <div onClick={this.props.onClick} style={{width: 'auto', height: '100px', background: getRandomColor()}}>
      </div>
    );
  }
}

class App extends Component {
  state = {totalClicks: 0}

  clickHandler = increment => {this.setState({totalClicks: this.state.totalClicks + increment});}

  div1ClickHandler = () => this.clickHandler(1);
  div2ClickHandler = () => this.clickHandler(2);
  div3ClickHandler = () => this.clickHandler(3);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Nester maxDepth={100} depth={0} />
      </div>
    );
  }
}

export default App;
