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
      {id: 1, title: 'A note', content: 'Lorem Ipsumasd asd sadas dasdasdas adasdas', dateAdded: '01-01-2019'},
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

  addNewNote = (event, id) => {
    console.log(event.target.value)
  }

  selectNoteHandler = (index) => {
    //alert(index)
    this.setState({showNote: index});
  }

  render() {

    let notes = null;
    notes =  (
      <div>
        {this.state.notes.map((note, index) => {
          let cn = (this.state.showNote === index) ? 'active' : '';
          return <Note
            active={ cn }
            title={ note.title }
            content={ note.content }
            date={ note.dateAdded }
            click={() => this.selectNoteHandler(index)}
            />
        })}
    </div>
    )

    return (
      <div className="App">
        <div className="NotesList">
        { notes }
        </div>
        <div className="Note">
          <h2>{ this.state.notes[this.state.showNote].title }</h2>
          <p>{ this.state.notes[this.state.showNote].content }</p>
        </div>
        <AddNote
          changed={(event) => this.addNewNote(event)}
        />
      </div>
    );
  }
}

export default App;
