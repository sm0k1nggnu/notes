import React, { Component } from "react";
import TableHeader from "./TableHeader";
//import TableBody from "./TableBody";

const TableBody = props => {
  const rows = props.noteData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.note}</td>
        <td>
          <button onClick={() => props.removeNote(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { noteData, removeNote } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody noteData={noteData} removeNote={removeNote} />
      </table>
    );
  }
}

export default Table;
