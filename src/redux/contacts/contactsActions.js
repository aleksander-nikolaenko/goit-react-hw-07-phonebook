import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');

export const deleteContact = createAction('contacts/delete');

// import { ADD_CONTACT, DELETE_CONTACT } from './contactsTypes';

// export const ADD_CONTACT = 'contacts/add';
// export const DELETE_CONTACT = 'contacts/delete';

// export const addContact = contact => ({
// type: ADD_CONTACT,
//   payload: contact,
// });

// export const deleteContact = id => ({
// type: DELETE_CONTACT,
//   payload: id,
// });
