import React, { useState } from 'react';
import axiosClient from '../api/axiosClient';

const UpdatePartialItem = () => {
  const [id, setId] = useState('');
  const [field, setField] = useState('');
  const [value, setValue] = useState('');

  const handlePatch = async () => {
    try {
      const response = await axiosClient.patch(`/posts/${id}`, { [field]: value });
      console.log('Item Partially Updated:', response.data);
      setId('');
      setField('');
      setValue('');
    } catch (error) {
      console.error('Error patching item:', error);
    }
  };

  return (
    <div>
      <h3>Patch Item</h3>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter item ID"
      />
      <input
        type="text"
        value={field}
        onChange={(e) => setField(e.target.value)}
        placeholder="Enter field to update"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter new value"
      />
      <button onClick={handlePatch}>Patch</button>
    </div>
  );
};

export default UpdatePartialItem;
