import React, { Component } from 'react';
import Person from './Person/Person';
import Note from './Note/Note';
import AddNote from './AddNote/AddNote';
import './App.css';

class App extends Component {
  state = {
    persons : [
      {id: 1, name: "Jonas", age: 17},
      {id: 2, name: "Jürgen", age: 27},
      {id: 3,name: "Maria", age: 37}
    ],
    notes : [
      {id: 1, title: 'A note', content: 'Lorem Ipsum', dateAdded: '01-01-2019'},
      {id: 2, title: 'Another note', content: 'Lorem Ipsum Foo', dateAdded: '01-01-2019'}
    ],
    showNote: 0
  }

  switchNameHandler = (newName) => {
    //console.log('clicked')
    //let newpersons = [{name: "Blanas", age:17}, ...this.state.persons]
    this.setState({
      persons : [
        {name: newName, age: 17},
        {name: "Jürgen", age: 27},
        {name: "Maria", age: 37}
      ],
      showPersons: false
    })
  }

  removePersonHandler = (index) => {
    //alert(index)
    const persons =  [...this.state.persons];
    persons.splice(index, 1)
    this.setState(
      {persons : [
        ...persons
    ]})

  }

  nameChangedHandler = (event, id) => {
    console.log('changed' + event)
    //let newpersons = [{name: "Blanas", age:17}, ...this.state.persons]
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    } )

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState(
      {persons : persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  selectNoteHandler = (index) => {
    //alert(index)
    this.setState({showNote: index});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue'
    }
    let persons = null;

    if(this.state.showPersons === true) {
      persons =  (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            name={person.name}
            age={person.age}
            key={person.id}
            click={() => this.removePersonHandler(index)}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
      </div>
      )
    } else {
      persons = null;
    }
    let notes = null;
    notes =  (
      <div>
        {this.state.notes.map((note, index) => {
          return <Note
            title={ note.title }
            content={ note.content }
            date={ note.date }
            click={() => this.selectNoteHandler(index)}
            />
        })}
    </div>
    )

    // let classes = ['red', 'bold'].join(' ');
    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red')
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <div className="NotesList">
        { notes }
        </div>
{/* if add note, show textfield right, add note to top on left in real time
else top current note is displayed in full
*/}
        <div className="Note">
          { this.state.showNote }
          <h2>{ this.state.notes[this.state.showNote].title }</h2>
          <p>{ this.state.notes[this.state.showNote].content }</p>
        </div>
        <AddNote
          changed={(event) => this.nameChangedHandler(event)}
        />
      {/* <button
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>


          { persons }

      <p className={classes.join(' ')}>sdfdsfds</p> */}
      </div>
    );
  }
}

export default App;
