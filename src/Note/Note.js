import React from 'react';
import './Note.css';

const note = (props) => {
    return (
        <div
            className="Note"
            onClick={ props.click }
        >
            <h2>{ props.title}<small>{ props.date }</small></h2>
            <p>{ props.content }</p>
        </div>
    )
}

export default note;