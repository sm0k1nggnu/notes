import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import Api from "./Api";
import { throwStatement } from "@babel/types";

const title = "notes";

class App extends Component {
  state = {
    notes: []
  };
  removeNote = index => {
    const { notes } = this.state;

    this.setState({
      notes: notes.filter((note, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = note => {
    this.setState({ notes: [...this.state.notes, note] });
  };
  render() {
    return (
      <div className="App">
        <h1> Hello, {title} </h1>
        <Table noteData={this.state.notes} removeNote={this.removeNote} />
        <Form handleSubmit={this.handleSubmit} />
        <Api />
      </div>
    );
  }
}

export default App;
