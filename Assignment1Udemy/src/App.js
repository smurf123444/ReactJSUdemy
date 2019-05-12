import React, { Component } from 'react';
import './App.css';
import Person from './components/Person'
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

class App extends Component {
  state = {
      userinput0: [
        { string: '' },
      ],
      userinput1: [
        { string: ''},
      ],
      userinput2: [
        { string: '' },
      ],
      otherState: 'some test state',
  }
  
switchNameHandler = () => {
    // DONT DO THIS this.state.persons[0].name = 'Test'
    this.setState({
      userinput0: [
        { string: '' },
      ],
      userinput1: [
        { string: ''},
      ],
      userinput2: [
        { string: '' },
      ],
    otherState: 'some test state',
})
  }

userChangeHandler0 = (event) => {
    // DONT DO THIS this.state.persons[0].name = 'Test'
    this.setState({ 
    userinput0: [
      { string: event.target.value },
    ],
    otherState: 'some test state',
})}

userChangeHandler1 = (event) => {
  // DONT DO THIS this.state.persons[0].name = 'Test'
  this.setState({ 
  userinput1: [
    { string: event.target.value },
  ],
  otherState: 'some test state',
})}

userChangeHandler2 = (event) => {
  // DONT DO THIS this.state.persons[0].name = 'Test'
  this.setState({ 
  userinput2: [
    { string: event.target.value },
  ],
  otherState: 'some test state',
})}


  render() {
      return (
        <div className='App'> 

        <button onClick={this.switchNameHandler}>Reset</button>
        
        <UserInput value={this.state.userinput0[0].string} 
                   changed={this.userChangeHandler0}/>
        <UserInput value={this.state.userinput1[0].string} 
                   changed={this.userChangeHandler1}/>  
        <UserInput value={this.state.userinput2[0].string} 
                   changed={this.userChangeHandler2}/>        
    
        <UserOutput value={this.state.userinput0[0].string}
                    changed={this.userChangeHandler0} />
        <UserOutput value={this.state.userinput1[0].string}
                    changed={this.userChangeHandler1} />
        <UserOutput value={this.state.userinput2[0].string}
                    changed={this.userChangeHandler2} />

        </div>
      );
    }
}

export default App;
