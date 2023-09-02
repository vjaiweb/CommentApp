import React from 'react';

function CommentList({ selectedPost }) {
  if (!selectedPost || !selectedPost.comments) {
    return <div className="comment-list">Select a post to view comments.</div>;
  }

  const { postId, title, body, comments } = selectedPost;

  return (
    <div className="comment-list">
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>Comments for Post #{postId}</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}:</strong> {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
