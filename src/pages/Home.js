// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    backgroundImage: 'url(/path/to/your/hero-image.jpg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    fontFamily: '"Lato", sans-serif',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '40px',
    borderRadius: '10px',
    maxWidth: '800px',
    width: '100%',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '20px',
    fontFamily: '"Playfair Display", serif',
    fontWeight: 'bold',
    lineHeight: '1.2',
  },
  paragraph: {
    fontSize: '1.2rem',
    margin: '0 auto',
    maxWidth: '600px',
    fontFamily: '"Lato", sans-serif',
  },
  button: {
    marginTop: '30px',
    padding: '20px 40px', 
    fontSize: '1.5rem', 
    backgroundColor: '#FF6347', 
    color: '#fff',
    border: 'none',
    borderRadius: '8px', 
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    fontFamily: '"Lato", sans-serif',
  },
};

const Home = () => {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/reservation');
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Bienvenidos a JeMar</h1>
        <p style={styles.paragraph}>
          Descubre la auténtica experiencia culinaria donde cada platillo cuenta una historia de sabor y tradición. 
          Te esperamos para una experiencia inolvidable.
        </p>
        <button
          onClick={handleReservationClick}
          style={styles.button}
        >
          Reserva Ahora
        </button>
      </div>
    </div>
  );
};

export default Home;
