import React from 'react';

export default function Error(props) {
    const { text } = props;
    return (
        <div className="details error">
            <p>Что-то пошло не так...</p>
            <p>Ошибка!</p>
            <p>{text}</p>
        </div>
    );
}