import React from 'react';
import LikeButtons from './LikeButtons';

function Header({videoData}) {
    const {id, title, embedUrl, views, createdAt, upvotes, downvotes} = videoData;

    return (
        <div key={id}>
            <iframe
            width="919"
            height="525"
            src={embedUrl}
            frameBorder="0"
            allowFullScreen
            title={title}
            />
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {createdAt}</p>
            <LikeButtons likes={upvotes} dislikes={downvotes}/>
        </div>
    )
}

export default Header;