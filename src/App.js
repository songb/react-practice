import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput';
import UserOutput from './UserOutput';
import ValidationComponent from './ValidationComponent';


class App extends Component {
  state = {
    username:"smith",
    textLength:0
  }

  inputLengthHandler=(event)=>{
    this.setState({textLength:event.target.value.length});
  }

  usernameHandler = (event)=>{
    this.setState({username:event.target.value})
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.inputLengthHandler}/>
        <p>{this.state.textLength}</p>
        <ValidationComponent textLength= {this.state.textLength} />
        <UserInput userNameHandler={this.usernameHandler} username={this.state.username}/>
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
