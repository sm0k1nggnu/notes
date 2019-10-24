import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      title: "",
      note: ""
    };
    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };
  render() {
    const { title, note } = this.state;

    return (
      <form>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <label>Note</label>
        <input
          type="text"
          name="note"
          value={note}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
