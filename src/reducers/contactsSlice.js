import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact: (state, action) => {
      const { id, name, number } = action.payload;

      const isContactUnique = state.contacts.findIndex(contact => contact.name.toLowerCase() === name.toLowerCase()) === -1;

      if (!isContactUnique) {
        alert(`${name} is already in contacts.`);
        return;
      }

      state.contacts.push({ id, name, number });
    },
    
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;