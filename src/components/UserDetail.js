// src/components/UserDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const USER_API_URL = 'https://jsonplaceholder.typicode.com/users';

const UserDetail = () => {
  const { userId } = useParams(); // Get the userId from the URL params
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${USER_API_URL}/${userId}`);
        setUser(response.data);
      } catch (error) {
        setError('Failed to fetch user details.');
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="user-detail">
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
    </div>
  );
};

export default UserDetail;
