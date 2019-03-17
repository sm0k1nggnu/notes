import React, { Component } from 'react';
import './AddNote.css';

// const addnote = (props) => {
class AddNote extends Component {
    state = {
        notes : [
            {id:5, title: '',content: ''}
        ]
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content
        }
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
                    //onChange={ props.changed }
                    value={ this.state.title }
                    placeholder="Title"
                    className=""
                />
                <textarea
                    value={this.state.content}
                    onChange={(event) => this.setState({content: event.target.value})}
                >
                </textarea>
                <button
                    onClick={this.postDataHandler}
                >save</button>
            </div>
        )
    }
}

export default AddNote;