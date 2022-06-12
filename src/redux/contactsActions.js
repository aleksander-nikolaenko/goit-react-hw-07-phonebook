import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACTS } from './contactsTypes';

export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const updateContacts = contacts => ({
  type: UPDATE_CONTACTS,
  payload: contacts,
});
