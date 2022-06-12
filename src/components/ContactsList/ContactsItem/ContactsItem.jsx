import PropTypes from 'prop-types';
import styles from './ContactsItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsActions';

export const ContactsItem = props => {
  const { id, name, number } = props;
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.item}>
      <button
        className={styles.button}
        type="Submit"
        onClick={() => handleDeleteContact(id)}
      >
        &#128503;
      </button>
      <div className={styles.wrapper}>
        <p className={styles.text}>&#128447;&nbsp;&nbsp;{name}</p>
        <p className={styles.number}>&#9742;&nbsp;&nbsp;{number}</p>
      </div>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
