// src/components/Menu.js
import React from 'react';

const styles = {
  section: {
    padding: '40px 20px',
    backgroundColor: '#f9f9f9',
    color: '#333',
    fontFamily: '"Arial", sans-serif',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#007bff',
    borderBottom: '2px solid #007bff',
    paddingBottom: '10px',
    display: 'inline-block',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  listItem: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '10px 0',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'left',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  listItemHover: {
    transform: 'scale(1.03)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0 0 10px',
    color: '#333',
  },
  description: {
    fontSize: '1rem',
    margin: '0 0 10px',
    color: '#666',
  },
  price: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#007bff',
  },
};

const Menu = ({ menuItems }) => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Menú</h2>
      <ul style={styles.list}>
        {menuItems.map((item) => (
          <li
            key={item.id}
            style={styles.listItem}
            onMouseEnter={(e) => e.currentTarget.style = { ...styles.listItem, ...styles.listItemHover }}
            onMouseLeave={(e) => e.currentTarget.style = styles.listItem}
          >
            <h3 style={styles.name}>{item.name}</h3>
            <p style={styles.description}>{item.description}</p>
            <p style={styles.price}>${item.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
