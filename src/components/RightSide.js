import React from 'react';

function RightSide({ selectedPost }) {
  if (!selectedPost) {
    return <div className="right-side">Select a post on the left side to view details.</div>;
  }

 

  return (
    <div className="right-side">
      
      <h2>{selectedPost.title}</h2>
      <p>{selectedPost.body}</p>
    </div>
  );
}

export default RightSide;
