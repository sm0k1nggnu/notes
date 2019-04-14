import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddNote.css';

// const addnote = (props) => {
class AddNote extends Component {
    state = {
        notes : [
            {title: '',content: ''}
        ]
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
                    // onClick={(event) => this.postDataHandler(event)}
                    onClick={(event) => this.props.onAddNote({title: this.state.title, content: this.state.content})}
                    className="AddNote__Save"
                >save</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        storedNotes: state.notes
    };
  }

  const mapDispatchToProps = dispatch => {
    return {
        onAddNote: (event) => dispatch({type: 'ADD_NOTE', title: event.title, content: event.content}),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);