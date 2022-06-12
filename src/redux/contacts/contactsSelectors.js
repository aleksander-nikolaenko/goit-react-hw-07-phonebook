import { getFilterValue } from '../filter/filterSelectors';

export const getContacts = state => state.contacts;

export const getFilteredContacts = state => {
  return getContacts(state).filter(contact =>
    contact.name
      .toLowerCase()
      .includes(getFilterValue(state).toLowerCase().trim())
  );
};
