import React from 'react';

export default function Details(props) {
    const { avatar, name, details } = props;
    return details ? (
        <div className="details">
            <img className="details-avatar" src={avatar} alt="avatar" />
            <div className="details-name">
                <h2>{name}</h2>
            </div>
            <div className="details-city">City: {details.city}</div>
            <div className="details-company">Company: {details.company}</div>
            <div className="details-position">Position: {details.position}</div>
        </div>
    ) : null;
}