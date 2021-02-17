import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput';
import UserOutput from './UserOutput';
import ValidationComponent from './ValidationComponent';
import CharCompoent from './CharComponent';

class App extends Component {
  state = {
    username: "smith",
    textLength: 0,
    inputText: []
  }

  inputLengthHandler = (event) => {
    this.setState({ textLength: event.target.value.length, inputText: [...event.target.value] });
  }

  usernameHandler = (event) => {
    this.setState({ username: event.target.value })
  }

  deleteBoxHandler = (event, index) => {
    const inputCopy = [...this.state.inputText];
    inputCopy.splice(index, 1);
    this.setState({ inputText: inputCopy, textLength:inputCopy.length})
  }

  render() {
    let chars = null;
    if (this.state.inputText) {
      chars = (
        <div>
          {
            this.state.inputText.map((c, index) => {
              return <CharCompoent charValue={c} key={index} deleteHandler={(event)=>this.deleteBoxHandler(event, index)} />;
            })
          }
        </div>)
    }


    return (
      <div className="App">
        <input type="text" onChange={this.inputLengthHandler} value={this.state.inputText.join('')}/>
        <p>{this.state.textLength}</p>
        <ValidationComponent textLength={this.state.textLength} />
        {chars}
        <UserInput userNameHandler={this.usernameHandler} username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
