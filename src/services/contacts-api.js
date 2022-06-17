import { http } from './api';

const BASE_URL = 'https://62a88d28ec36bf40bda88928.mockapi.io/api/v1';

export const fetchContacts = () => {
  return http.get(`${BASE_URL}/contacts`);
};

export const fetchContact = id => {
  return http.get(`${BASE_URL}/contacts/${id}`);
};

export const addContact = contact => {
  return http.post(`${BASE_URL}/contacts/`, contact);
};

export const deleteContact = id => {
  return http.delete(`${BASE_URL}/contacts/${id}`);
};
