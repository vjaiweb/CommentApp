import React from 'react';

function PostList({ comments, filter, setSelectedPost }) {
  const filteredPosts = comments.filter((post) =>
    post.postId.toString().includes(filter)
  );
  
  

  return (
    <div className="post-list">
      <h2>Posts</h2>
      <ul>
        {filteredPosts.map((post) => (
          <li
          key={post.id}
          onClick={() => setSelectedPost(post)} // Ensure setSelectedPost is called with the correct data
          className="post-item"
        >
          {post.body}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
