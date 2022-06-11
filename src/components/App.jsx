import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container';
import { ContactForm } from './ContactForm';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filterSelectors';

const initialContacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];
export const App = () => {
  const filter = useSelector(getFilterValue);

  const [contacts, setContacts] = useState(
    localStorage.getItem('contactsList')
      ? JSON.parse(localStorage.getItem('contactsList'))
      : initialContacts
  );

  useEffect(() => {
    localStorage.setItem('contactsList', JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(contacts => [contact, ...contacts]);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onFormSubmit} contactsList={contacts} />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList
        contacts={visibleContacts}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};
