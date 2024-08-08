// src/pages/ReservationPage.js
import React from 'react';
import ReservationForm from '../components/ReservationForm';

const styles = {
  reservationPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 20px',
    backgroundColor: '#f8f9fa',
    color: '#212529',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#343a40',
    borderBottom: '3px solid #007bff',
    paddingBottom: '10px',
    textAlign: 'center',
    maxWidth: '800px',
    width: '100%',
  },
  formContainer: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#ffffff',
    border: '1px solid #e1e1e1',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    margin: '20px auto',
  },
  formField: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontWeight: '500',
    color: '#495057',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ced4da',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  inputFocus: {
    borderColor: '#007bff',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, box-shadow 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
  message: {
    marginTop: '20px',
    fontSize: '1.2rem',
    color: '#28a745',
    textAlign: 'center',
  },
};

const ReservationPage = () => {
  return (
    <div style={styles.reservationPage}>
      <h1 style={styles.title}>Reserva tu Mesa</h1>
      <div style={styles.formContainer}>
        <ReservationForm />
        {/* Puedes usar el siguiente estilo en el componente ReservationForm para los mensajes */}
        {/* <p style={styles.message}>¡Reserva exitosa!</p> */}
      </div>
    </div>
  );
};

export default ReservationPage;
