import React from 'react';

const Menu = ({ menuItems }) => {
  return (
    <section>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
