// src/components/Footer.js
import React from 'react';

const styles = {
  footer: {
    backgroundColor: '#007bff',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 10px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  footerText: {
    margin: '0',
    fontSize: '1rem',
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>&copy; 2024 Restaurant App. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
