import React, { Component } from 'react';
// import Person from './Person/Person';
import Note from './Note/Note';
import AddNote from './AddNote/AddNote';
import './App.css';

class App extends Component {
  state = {
    notes : [
      {id: 1, title: 'A note', content: 'Lorem Ipsumasd asd sadas dasdasdas adasdas', dateAdded: '01-01-2019'},
      {id: 2, title: 'Another note', content: 'Lorem Ipsum Foo', dateAdded: '01-01-2019'}
    ],
    showNote: 0,
    lastNoteId: 2
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
    // let noteId = this.state.lastNoteId++;
    // let newNote = {id: noteId, content: '', dateAdded: '01-01-2019'};
    // newNote = {
    //   content: event.target.value
    // };
    // console.dir(newNote)
    // const newNotes = [
    //   newNote,
    //   ...this.state.notes
    // ]
    // console.dir(newNotes)
    // this.setState(
    //   {notes: newNotes}
    // )
  }

  saveNewNote = (event, id) => {
    console.log('saved')
    // let noteId = this.state.lastNoteId++;
    // let newNote = {id: noteId, content: '', dateAdded: '01-01-2019'};
    // newNote = {
    //   content: event.target.value
    // };
    // const newNotes = [
    //   newNote,
    //   ...this.state.notes
    // ]
    // this.setState(
    //   {notes: newNotes}
    // )
  }

  deleteNote = (event, id) => {
    const notes =  [...this.state.notes];
    notes.splice(id, 1)
    this.setState(
      {notes : [
        ...notes
    ]})
  }

  selectNoteHandler = (index) => {
    //alert(index)
    this.setState({showNote: index});
  }

  render() {
    let notes = null;
    let note = null;
    if(this.state.notes.length > 0) {
      notes =  (
        <div>
          {this.state.notes.map((note, index) => {
            let cn = (this.state.showNote === index) ? 'active' : '';
            return <Note
              key={ index }
              active={ cn }
              title={ note.title }
              content={ note.content }
              date={ note.dateAdded }
              click={() => this.selectNoteHandler(index)}
              />
          })}
      </div>
      )
    }
    if(this.state.notes.length > 0) {
      note = (
        <div className="Note">
          { this.state.lastNoteId }
          <h2>{ this.state.notes[this.state.showNote].title }</h2>
          <button
            onClick={(event) => this.deleteNote(event, this.state.showNote)}>delete
          </button>
          <p>{ this.state.notes[this.state.showNote].content }</p>
        </div>
        )
      }

    return (
      <div className="App">
        <div className="NotesList">
        <AddNote
          changed={(event) => this.addNewNote(event)}
          save={(event) => this.saveNewNote(event)}
        />
         { notes }
        </div>
         { note }

      </div>
    );
  }
}

export default App;
