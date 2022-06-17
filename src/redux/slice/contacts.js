import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../services/contacts-api';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await contactsApi.fetchContacts();
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    const response = await contactsApi.addContact(contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    const response = await contactsApi.deleteContact(id);
    return response.data;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {
  //   addContact(state, { payload }) {
  //     return [payload, ...state];
  //   },
  //   deleteContact(state, { payload }) {
  //     return state.filter(contact => contact.id !== payload);
  //   },
  // },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.status = 'idle';
      const data = payload;
      state.items = data;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.status = 'idle';
      state.items.push(payload);
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.status = 'idle';
      state.items = state.items.filter(item => item.id !== payload.id);
    },
    [fetchContacts.pending]: state => {
      state.status = 'loading';
    },
    [addContact.pending]: state => {
      state.status = 'creating';
    },
    [deleteContact.pending]: state => {
      state.status = 'deleting';
    },
    [fetchContacts.rejected]: (state, { error }) => {
      state.error = error;
      state.status = 'idle';
    },
    [addContact.rejected]: (state, { error }) => {
      state.error = error;
      state.status = 'idle';
    },
    [deleteContact.rejected]: (state, { error }) => {
      state.error = error;
      state.status = 'idle';
    },
  },
});

export default contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;
