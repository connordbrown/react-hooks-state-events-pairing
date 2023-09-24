import React from 'react';
import LikeButtons from './LikeButtons';

function UserComment({id, user, text, onDelete}) {
    return (
        <div>
            <h3>{user}</h3>
            <p>{text}</p>
            <LikeButtons />
            <button style={{fontSize: 'x-small'}} onClick={() => onDelete(id)}>delete</button>
        </div>
    )
}

export default UserComment;