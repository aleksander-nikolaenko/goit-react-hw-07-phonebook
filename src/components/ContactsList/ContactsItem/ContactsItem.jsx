import PropTypes from 'prop-types';
import styles from './ContactsItem.module.css';
import { useDeleteContactMutation } from 'redux/queries/contactsQuery';
import { LoaderButton } from 'components/LoaderButton';

export const ContactsItem = props => {
  const { id, name, number } = props;
  const [deleteContactTrigger, { isLoading: isDeleting }] =
    useDeleteContactMutation();

  const handleDeleteContact = id => {
    deleteContactTrigger(id);
  };
  return (
    <li className={styles.item}>
      <button
        className={styles.button}
        type="Submit"
        onClick={() => handleDeleteContact(id)}
      >
        {isDeleting ? <LoaderButton /> : <span>&#128503;</span>}
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
