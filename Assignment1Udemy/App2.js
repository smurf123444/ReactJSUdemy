import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

const app = proper => {
  const [ personsStates, setPersonsState ] = useState({
   persons: [
      { name: 'Virginia', age: 0 },
      { name: 'Chris', age: 0 },
      { name: 'Chelsea', age: 0 },
    ],
    otherState: 'some test state',
  });
  
  const switchNameHandler = () => {
    // DONT DO THIS this.state.persons[0].name = 'Test'
    this.setState({
      persons:  [
      { name: 'Virginia', age: 26 },
      { name: 'Chris', age: 23 },
      { name: 'andrew', age: 28 },
    ]})
  }


      return (
        <div className='App'> 
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Show Age</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>& I am a child</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

        </div>
      );
    }

export default app;
