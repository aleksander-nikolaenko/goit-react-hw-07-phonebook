import { ContactsItem } from './ContactsItem';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/queries/contactsQuery';
import { LoaderPage } from 'components/LoaderPage';

import styles from './ContactsList.module.css';

export const ContactsList = () => {
  const result = useGetContactsQuery();
  const { data, isLoading } = result;

  const filter = useSelector(getFilterValue);
  const contacts = useMemo(() => {
    return data?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }, [filter, data]);

  return (
    <>
      {isLoading && <LoaderPage />}
      {data && (
        <ul className={styles.list}>
          {contacts.map(({ id, name, number }) => (
            <ContactsItem key={id} name={name} number={number} id={id} />
          ))}
        </ul>
      )}
    </>
  );
};
