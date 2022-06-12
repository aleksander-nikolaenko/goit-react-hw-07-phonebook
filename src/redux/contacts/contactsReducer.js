import { nanoid } from 'nanoid';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './contactsActions';
const initialContacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

// import { ADD_CONTACT, DELETE_CONTACT } from './contactsTypes';

// export const ADD_CONTACT = 'contacts/add';
// export const DELETE_CONTACT = 'contacts/delete';

// export const contactsReducer = (state = initialContacts, action) => {

//   switch (action.type) {
//     case ADD_CONTACT:
//       return [action.payload, ...state];

//     case DELETE_CONTACT:
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };
