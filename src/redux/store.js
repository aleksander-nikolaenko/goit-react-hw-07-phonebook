import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './slice/contacts';
import filterReducer from './slice/filter';
import { contactsApi } from './queries/contactsQuery';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    // contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  // devTools: process.env.NODE_ENV !== 'production',
});
