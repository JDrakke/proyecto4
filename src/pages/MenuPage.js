// src/pages/MenuPage.js
import React from 'react';

const menuItems = [
  { id: 1, name: 'Espaguetis', description: 'Espaguetis deliciosos con salsa marinara', price: 12.99 },
  { id: 2, name: 'Hamburguesa', description: 'Hamburguesa jugosa con todos los acompañamientos', price: 9.99 },
  { id: 3, name: 'Ensalada César', description: 'Ensalada César fresca con crutones crujientes', price: 8.99 }
];

const styles = {
  menuPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
    backgroundColor: '#f4f4f9',
    color: '#333',
    fontFamily: '"Arial", sans-serif',
  },
  menuTitle: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    color: '#007bff',
    borderBottom: '2px solid #007bff',
    paddingBottom: '10px',
    textAlign: 'center',
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '900px',
  },
  menuItem: {
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    margin: '15px',
    padding: '20px',
    width: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
    ':hover': {
      transform: 'scale(1.03)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  menuItemName: {
    fontSize: '1.75rem',
    marginBottom: '10px',
    color: '#333',
  },
  menuItemDescription: {
    fontSize: '1rem',
    marginBottom: '10px',
    color: '#666',
  },
  menuItemPrice: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#e83e8c',
  }
};

const MenuPage = () => {
  return (
    <div style={styles.menuPage}>
      <h1 style={styles.menuTitle}>Nuestra Carta</h1>
      <div style={styles.menuContainer}>
        {menuItems.map(item => (
          <div key={item.id} style={styles.menuItem}>
            <h2 style={styles.menuItemName}>{item.name}</h2>
            <p style={styles.menuItemDescription}>{item.description}</p>
            <p style={styles.menuItemPrice}>${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
