import React from 'react';
import ListItem from './ListItem';

export default function List(props) {
    const { error, list, clickHandler } = props;
    return error && !list.length ? null : (
        <ul className="list">
            {list.map((item) => {
                return <ListItem key={item.id} {...item} clickHandler={clickHandler} />;
            })}
            <li className="list-item">...</li>
        </ul>
    );
}