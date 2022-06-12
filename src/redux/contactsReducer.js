import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACTS } from './contactsTypes';

export const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [action.payload, ...state];

    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);

    case UPDATE_CONTACTS:
      return action.payload;

    default:
      return state;
  }
};
