import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note/Note';
import AddNote from './AddNote/AddNote';
import './App.css';
// test
class App extends Component {
  state = {
    showNote: 0,
    lastNoteId: 2
  }

  selectNoteHandler = (index) => {
    let id = this.props.storedNotes[index].id
    this.setState({showNote: id});
  }

  render() {
    let notes = null;
    if(this.props.storedNotes) {
      notes =  (
        <div>
          {this.props.storedNotes.map((note, index) => {
            let cn = (this.props.showNote === note.id) ? 'active' : '';
            return <Note
              key={ index }
              active={ cn }
              title={ note.title }
              content={ note.content }
              //date={ note.id }
              click={() => this.props.onSelectNote({id: note.id})}
              />
          })}
      </div>
      )
    } else {
      notes = (
        <p>No Notes</p>
      )
    }
    //single note
    let note = null;
    let noteId = null;
    if(this.props.storedNotes.length > 0) {
      noteId = this.props.storedNotes.length-1;//this.props.storedNotes.findIndex(note => note.id === this.props.showNote);

    if(this.props.showNote !== null) {
        noteId = this.props.storedNotes.findIndex(note => note.id === this.props.showNote)
      }
      //console.log("note id index" + noteId + "shownote " +  this.props.showNote)
      note = (
        <div className="Note" key={ noteId }>{ noteId }
          <h2>{ this.props.storedNotes[noteId].title }</h2>
          <button
            onClick={() => this.props.onDeleteNote({id: this.props.showNote})}>delete
          </button>
          <p>{ this.props.storedNotes[noteId].content }</p>
        </div>
        )
      } else {
        note = (<p></p>)
      }

    return (
      <div className="App">
        <div className="NotesList">
          <AddNote
            changed={(event) => this.addNewNote(event)}
            save={(event) => this.saveNewNote(event)}
            clicked={this.props.onAddNote}
          />
         { notes }
        </div>
         { note }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      storedNotes: state.notes,
      showNote: state.showNote,
      lastNoteId: state.lastNoteId
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onDeleteNote: (event) => dispatch({type: 'DELETE_NOTE', noteId: event.id}),
      onSelectNote: (event) => dispatch({type: 'SELECT_NOTE', noteId: event.id})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
