import React, { useState } from 'react';
import UserComment from './UserComment.js'

function CommentList({comments}) {
    const [pageComments, setPageComments] = useState(comments);
    const [commentVis, setCommentVis] = useState(true);
    const [userSearch, setUserSearch] = useState("")

    function handleDelete(commentToDelete) {
        const newComments = pageComments.filter(comment => {
            return comment.id !== commentToDelete;
        })
        setPageComments(newComments);
    }

    function handleVisChange() {
        setCommentVis(commentVis => !commentVis);
    }

    function handleUserSearch(event) {
        setUserSearch(event.target.value);
    }

    const commentsToDisplay = pageComments
        .filter(comment => comment.user.includes(userSearch))
        .map(comment => {
            return <UserComment 
                        key={comment.id}
                        id={comment.id}
                        user={comment.user}
                        text={comment.comment}
                        onDelete={handleDelete}
                    />
        })
    const numComments = commentsToDisplay.length;

    return (
        <div>
            <button onClick={handleVisChange}>{commentVis ? 'Hide' : 'Show'} comments</button>
            <hr className='divider'></hr>

            <div className={commentVis ? 'visible' : 'hidden'}>
                <form>
                    <label>Search comments by username: </label>
                    <input type='text' onChange={handleUserSearch}></input>
                </form>
                <h2>{numComments} {(numComments !== 1) ? 'Comments' : 'Comment'}</h2>
                {commentsToDisplay}
            </div>
        </div>
    )
}

export default CommentList;