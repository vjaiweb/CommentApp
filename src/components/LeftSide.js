import React from 'react';
import FilterInput from './FilterInput';
import PostList from './PostList';

function LeftSide({ comments, filter, setSelectedPost, setFilter }) {
  return (
    <div className="left-side">
      <FilterInput filter={filter} setFilter={setFilter} />
      <PostList comments={comments} filter={filter} setSelectedPost={setSelectedPost} />
    </div>
  );
}

export default LeftSide;
