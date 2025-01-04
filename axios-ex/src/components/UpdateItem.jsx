import React, { useState } from 'react';
import axiosClient from '../api/axiosClient';

const UpdateItem = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axiosClient.put(`/posts/${id}`, { title });
      console.log('Item Updated:', response.data);
      setId('');
      setTitle('');
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div>
      <h3>Update Item</h3>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter item ID"
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter new title"
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateItem;
