import React from 'react';
import './Note.css';

const note = (props) => {
    let classes = [];
    classes.push('Note');
    props.active ? classes.push(props.active) : classes.push('')
    return (
        <div
            className={classes.join(' ')}
            onClick={ props.click }
        >
            <h2>{ props.title}<small>{ props.date }</small></h2>
            <p>{ props.content.length >= 20 ? `${props.content.substring(0,20)}...` : props.content }</p>
        </div>
    )
}

export default note;