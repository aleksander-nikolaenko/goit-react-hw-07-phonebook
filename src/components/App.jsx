import { Container } from './Container';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateContacts } from 'redux/contactsActions';

const initialContacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      dispatch(updateContacts(JSON.parse(localStorage.getItem('contacts'))));
    } else {
      localStorage.setItem('contacts', JSON.stringify(initialContacts));
      dispatch(updateContacts(initialContacts));
    }
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <ToastContainer />
    </Container>
  );
};
