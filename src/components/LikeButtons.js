import React, { useState } from 'react';

function LikeButtons({likes=0, dislikes=0}) {
    const [upVotes, setUpvotes] = useState(likes);
    const [downVotes, setDownvotes] = useState(dislikes);

    function handleLike() {
        setUpvotes(upVotes + 1);
    }

    function handleDislike() {
        setDownvotes(downVotes + 1);
    }

    return (
        <div>
            <p>
            <button onClick={handleLike}>{upVotes} 👍</button>
            <button onClick={handleDislike}>{downVotes} 👎</button>
            </p>
        </div>
    )
}

export default LikeButtons;