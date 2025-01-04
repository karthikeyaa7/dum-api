import React, { useState } from 'react';
import axiosClient from '../api/axiosClient';

const FetchItem = () => {
  const [id, setId] = useState('');
  const [item, setItem] = useState(null);

  const handleFetch = async () => {
    try {
      const response = await axiosClient.get(`/posts/${id}`);
      setItem(response.data);
    } catch (error) {
      console.error('Error fetching item:', error);
    }
  };

  return (
    <div>
      <h3>Fetch Item</h3>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter item ID"
      />
      <button onClick={handleFetch}>Fetch</button>
      {item && (
        <div>
          <h4>Item Details:</h4>
          <p>ID: {item.id}</p>
          <p>Title: {item.title}</p>
        </div>
      )}
    </div>
  );
};

export default FetchItem;
