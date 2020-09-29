import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Vane', age: 30 },
      { id: 3, name: 'Kiki', age: 10 },
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {

    // Finding the person
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })

    //Get the person itself
    const person = {
      ...this.state.persons[personIndex]
    }

    //Updating name
    person.name = event.target.value;

    //Upadte array
    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({
      persons: persons
    });

  }

  togglePersonsHandler = () => {
   const doesShow = this.state.showPersons;
   this.setState({showPersons: !doesShow});
  }

  deletePersonHandle = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})

  }
  render() {

    const style = {
      background: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
       <div>
         {this.state.persons.map((person, index) => {
           return <Person
           delete={() => this.deletePersonHandle (index)}
           name={person.name}
           age={person.age}
           key={person.id}
           changed={(event) => this.nameChangeHandler (event, person.id)}/>
         })}
       </div>
      );
      style.background = 'red'
    }

    return (
      <div className="App">
        <h1>Hola estoy estresada </h1>
        <p>This is working</p>
        <button 
        onClick={this.togglePersonsHandler} 
        style = {style}>
          Toogle Persons</button>
        {persons}
      </div>   
    );
  }
}

export default App;
