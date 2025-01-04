import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

const ItemList = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await axiosClient.get('/posts'); 
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItems(); 
  }, []);

  return (
    <div>
      <h3>Item List</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} - {item.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
