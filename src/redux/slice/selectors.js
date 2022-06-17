import { createSelector } from '@reduxjs/toolkit';

export const getFilterValue = state => state.filter;

export const getContacts = state => state.contacts.items;

export const getContactsStatus = state => state.contacts.status;

export const getFilteredContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);
