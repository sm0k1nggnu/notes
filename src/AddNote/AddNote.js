import React, { Component } from 'react';
import './AddNote.css';

// const addnote = (props) => {
class AddNote extends Component {
    state = {
        lastNoteId : 4,
        content: '',
        title: '',
        notes : [
            {id:5, title: '',content: ''}
        ]
    }

    postDataHandler = (e) => {
        console.log("postdatahandler")
        console.log(this.state.title)
        console.log(this.state.content)
        // const data = {
        //     title: this.state.title,
        //     body: this.state.content
        // }
        let noteId = this.state.lastNoteId++;
        let newNote = {id: noteId, content: '', dateAdded: '01-01-2019'};
        newNote = {
          content: this.state.content
        };
        const newNotes = [
          newNote,
          ...this.state.notes
        ]
        this.setState(
          {notes: newNotes}
        )
    }

     render() {
        return (
            <div className="AddNote">
                <input
                    type="text"
                    onChange={(event) => this.setState({title: event.target.value})}
                    value={ this.state.notes.title }
                    placeholder="My New Note"
                    className="AddNote__Title"
                />
                <textarea
                    value={this.state.notes.content}
                    placeholder="Lorem Ipsum Foo Bar"
                    onChange={(event) => this.setState({content: event.target.value})}
                    className="AddNote__Content"
                >
                </textarea>
                <button
                    onClick={(event) => this.postDataHandler(event)}
                    className="AddNote__Save"
                >save</button>
            </div>
        )
    }
}

export default AddNote;