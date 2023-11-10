import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../reducers/contactsSlice';
import './ContactList.css';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button className="contacts-button" type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;