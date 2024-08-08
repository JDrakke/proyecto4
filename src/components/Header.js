// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  header: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  },
  navLinkActive: {
    backgroundColor: '#0056b3',
    color: '#fff',
  },
};

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Restaurant JeMar App</h1>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link to="/" style={styles.navLink} activeStyle={styles.navLinkActive}>Home</Link></li>
          <li style={styles.navItem}><Link to="/menu" style={styles.navLink} activeStyle={styles.navLinkActive}>Menu</Link></li>
          <li style={styles.navItem}><Link to="/reservation" style={styles.navLink} activeStyle={styles.navLinkActive}>Reservación</Link></li>
          <li style={styles.navItem}><Link to="/contact" style={styles.navLink} activeStyle={styles.navLinkActive}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
