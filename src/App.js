import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments?_limit=100')
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="left">
         <LeftSide
          comments={comments}
          filter={filter}
          setSelectedPost={setSelectedPost}
          setFilter={setFilter} 
         />
        </div>
        <div className="right">
         <RightSide 
         selectedPost={selectedPost} 
         />
        </div>
      </div>
    </div>
  );
}

export default App;
