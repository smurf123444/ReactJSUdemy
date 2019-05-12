import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Virginia', age: 0 },
      { name: 'Chris', age: 0 },
      { name: 'Chelsea', age: 0 },
    ],
    otherState: 'some test state',
  }
  
  switchNameHandler = () => {
    // DONT DO THIS this.state.persons[0].name = 'Test'
    this.setState({
      persons:  [
      { name: 'Virginia', age: 26 },
      { name: 'Chris', age: 23 },
      { name: 'Chelsea', age: 28 },
    ]})
  }

nameChangeHandler = (event) => {
    // DONT DO THIS this.state.persons[0].name = 'Test'
    this.setState({
      persons:  [
      { name: 'Virginia', age: 26 },
      { name: event.target.value, age: 23 },
      { name: 'Chelsea', age: 28 },
    ]})
  }


  render() {
      return (
        <div className='App'> 
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Show Age</button>
        <Person name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, "Max!")}
                changed={this.nameChangeHandler}> Child</Person>      
        <Person name={this.state.persons[2].name} 
                age={this.state.persons[2].age}/>

        </div>
      );
    }
}

export default App;
