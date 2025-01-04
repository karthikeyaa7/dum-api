import React, { useState } from 'react';
import axiosClient from '../api/axiosClient';

const DeleteItem = () => {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      await axiosClient.delete(`/posts/${id}`);
      console.log('Item Deleted:', id);
      setId('');
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h3>Delete Item</h3>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter item ID"
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteItem;
