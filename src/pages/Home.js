import React from 'react';
import Menu from '../components/Menu';

const menuItems = [
  { id: 1, name: 'Spaghetti', description: 'Delicious spaghetti with marinara sauce', price: 12.99 },
  { id: 2, name: 'Burger', description: 'Juicy burger with all the fixings', price: 9.99 },
  { id: 3, name: 'Caesar Salad', description: 'Fresh Caesar salad with crispy croutons', price: 8.99 }
];

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Restaurant</h1>
      <Menu menuItems={menuItems} />
    </div>
  );
};

export default Home;
