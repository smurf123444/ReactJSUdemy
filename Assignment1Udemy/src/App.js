import React, { Component } from 'react';
import './App.css';

import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

class App extends Component {
  state = {
      userinput0: [
        { id: 'test', string: '' },
        { id: 'test1', string: '' },
        { id: 'test2', string: '' },
      ],
      otherState: 'some test state',
  }
  
switchNameHandler = (event) => {
    // DONT DO THIS this.state.persons[0].name = 'Test'
    this.setState({
      userinput0: [
        { id: 'test', string: '' },
        { id: 'test1', string: '' },
        { id: 'test2', string: '' },
    ],
})
  }

userChangeHandler0 = (event, id) => {
    // DONT DO THIS this.state.persons[0].name = 'Test'

    const personIndex = this.state.userinput0.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.userinput0[personIndex]
    };

    person.string = event.target.value;

    const persons = [...this.state.userinput0];
    persons[personIndex] = person;

    this.setState({ 
    userinput0: persons
  } )
}

togglePersonsHandler = () => {
  this.setState({
    showPersons: true
  })
}

  render() {
    let persons = null;
    if (this.state.showPersons ) {
      persons = (
        <div>
          {this.state.userinput0.map((person) => {
            return <UserInput 
              value={person.string} 
              changed={(event) => this.userChangeHandler0(event, person.id)}/>
          })}

          {this.state.userinput0.map(person => {
            return <UserOutput
              value={person.string} 
              changed={(event) => this.userChangeHandler0(event, person.id)}/>
          })}
        </div>
      )
    }
      return (
        <div className='App'> 
        <button onClick={this.togglePersonsHandler}>Toggle Person</button>
        <button onClick={this.switchNameHandler}>Reset</button>
        
       {persons}
        </div>
      );
    }
}

export default App;
