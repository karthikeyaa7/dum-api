import React from 'react';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import UpdateItem from './components/UpdateItem';
import DeleteItem from './components/DeleteItem';
import UpdatePartialItem from './components/UpdatePartialItem';
import FetchItem from './components/FetchItem';

const App = () => {
  return (
    <div>
      <h1>Axios API Example</h1>
      <AddItem />
      <ItemList />
      <UpdateItem />
      <DeleteItem />
      <UpdatePartialItem />
      <FetchItem />
    </div>
  );
};

export default App;
