import React from 'react';
import './Note.css';

const note = (props) => {
    let classes = [];
    classes.push('Note');
    props.active ? classes.push(props.active) : classes.push('')
    return (
        <tr
            className={classes.join(' ')}
            onClick={ props.click }
            key={ props.key }
        >
            <td>
                { props.title}
            </td>
            <td>
                { props.content.length >= 20 ? `${props.content.substring(0,20)}...` : props.content }
            </td>
            <td>
                <button>Delete</button>
            </td>
        </tr>
    )
}

export default note;