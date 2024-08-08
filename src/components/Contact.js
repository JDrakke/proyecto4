// src/components/Contact.js
import React from 'react';

const styles = {
  contactSection: {
    padding: '40px 20px',
    backgroundColor: '#f4f4f9',
    color: '#333',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#007bff',
    marginBottom: '20px',
    borderBottom: '2px solid #007bff',
    paddingBottom: '10px',
  },
  info: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    margin: '0 auto',
    maxWidth: '600px',
  },
  contactItem: {
    marginBottom: '15px',
  },
};

const Contact = () => {
  return (
    <section style={styles.contactSection}>
      <h2 style={styles.title}>Contáctanos</h2>
      <div style={styles.info}>
        <div style={styles.contactItem}>
          <strong>Email:</strong> contacto@JeMar.cl
        </div>
        <div style={styles.contactItem}>
          <strong>Teléfono:</strong> +56 9 1234 5678
        </div>
        <div style={styles.contactItem}>
          <strong>Dirección:</strong> Av. Providencia 1234, Santiago, Región Metropolitana, Chile
        </div>
      </div>
    </section>
  );
};

export default Contact;
