import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'reservations'), {
        name,
        date,
        time,
        guests
      });
      alert('Reservation successful!');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <section>
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </label>
        <label>
          Number of Guests:
          <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ReservationForm;
