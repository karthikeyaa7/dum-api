import React, { useState } from 'react';
import axiosClient from '../api/axiosClient';

const AddItem = () => {
  const [title, setTitle] = useState('');

  const handleAdd = async () => {
    try {
      const response = await axiosClient.post('/posts', { title });
      console.log('Item Added:', response.data);
      setTitle('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      <h3>Add Item</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter item title"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddItem;
