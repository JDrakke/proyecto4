import React, { useState } from 'react';
import { db } from './firebase'; // Asegúrate de que la configuración de Firebase está correcta
import { collection, addDoc } from 'firebase/firestore';

const Reservation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'reservations'), {
        name,
        email,
        date,
        time
      });
      setMessage('¡Reserva exitosa!');
      setName('');
      setEmail('');
      setDate('');
      setTime('');
    } catch (error) {
      console.error('Error añadiendo la reserva: ', error);
      setMessage('Error al realizar la reserva. Por favor, intente de nuevo.');
    }
  };

  return (
    <section>
      <h2>Hacer una Reserva</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label htmlFor="time">Hora:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <button type="submit">Reservar</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
};

export default Reservation;
