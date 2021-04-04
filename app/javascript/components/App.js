import React, { Component } from 'react';

import Person from '../src/Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'as',name: 'Max', age: 28 },
      { id: 'sd',name: 'trumpanzee', age: 18},
      { id: 'zx',name: 'Manu', age: 29 }
    ],
    showPersons: false

  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color:'white',
    //   font: 'inherit',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key = {person.id}
              changed={(event) => this.nameChangeHandler(event,person.id)}/>
          })}
          
        </div>
      )
      // style.backgroundColor = "red";
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    return (
      
      <div className="App">
      	
          
          onClick={this.togglePersonsHandler}>Switch Name
         
        <h1 className={classes.join(' ')}> Test </h1>
        {persons}
      </div>
      
    );
  }
}

export default App;
