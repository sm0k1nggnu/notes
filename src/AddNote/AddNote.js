import React from 'react';
import './AddNote.css';

const addnote = (props) => {
    return (
        <div className="AddNote">
            <input
                type="text"
                onChange={ props.changed }
                value={ props.name }
            />
        </div>
    )
}

export default addnote;