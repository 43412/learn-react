import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      title: 'App title'
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({
      title: 'New app title'
    });
  }

  render() {

    const list = [
      'Toyota',
      'Honda',
      'Suzuki'
    ];

    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div onClick={this.onClick}>Click here!</div>
        <MyComponent />
      </div>
    );
  }
}

export default App;
