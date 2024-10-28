// src/components/Users.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(USERS_API_URL);
        setUsers(response.data);
      } catch (error) {
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div className="card">
              <Link to={`/users/${user.id}`} className="card-title">
                <img
                  src={`https://i.pravatar.cc/300?u=${user.id}`} // Placeholder image URL
                  alt={user.name}
                  style={{ borderRadius: '10px', width: '100%', height: 'auto' }}
                />
                {user.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
