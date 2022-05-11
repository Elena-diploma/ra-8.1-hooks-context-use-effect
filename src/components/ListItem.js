import React from 'react';

export default function ListItem(props) {
    const {id, name, clickHandler} = props;
    return (
        <li className="list-item" onClick={() => clickHandler(id)}>
            {name}
        </li>
    );
}