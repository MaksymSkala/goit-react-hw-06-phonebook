import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../reducers/contactsSlice';
import './ContactForm.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) {
      alert('Please fill in all fields.');
      return;
    }

    dispatch(addContact({ id: Date.now().toString(), name, number }));

    setName('');
    setNumber('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-input">
        Name:
        <input type="text" name="name" value={name} onChange={handleNameChange} />
      </label>
      <label className="form-input">
        Number:
        <input type="tel" name="number" value={number} onChange={handleNumberChange} />
      </label>
      <button className="form-button" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;