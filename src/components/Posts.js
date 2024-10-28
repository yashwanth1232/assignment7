// src/components/Posts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(POSTS_API_URL);
        setPosts(response.data);
      } catch (error) {
        setError('Failed to fetch posts.');
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h2>Posts List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div className="card">
              <h3 className="card-title">{post.title}</h3>
              <img 
                src={`https://picsum.photos/300/200?random=${post.id}`} 
                alt={`Post ${post.id}`} 
              />
              <p>{post.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
