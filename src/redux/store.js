import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slice/contacts';
import filterReducer from './slice/filter';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  // devTools: process.env.NODE_ENV !== 'production',
});
