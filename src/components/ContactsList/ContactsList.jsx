// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contactsSelectors';
import { ContactsItem } from './ContactsItem';
import styles from './ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};
