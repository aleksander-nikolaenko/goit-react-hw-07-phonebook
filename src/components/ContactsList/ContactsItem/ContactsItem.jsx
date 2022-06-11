import PropTypes from 'prop-types';
import styles from './ContactsItem.module.css';

export const ContactsItem = props => {
  const { id, name, number, onDeleteContact } = props;
  return (
    <li className={styles.item}>
      <button
        className={styles.button}
        type="Submit"
        onClick={() => onDeleteContact(id)}
      >
        &#128503;
      </button>
      <div className={styles.wrapper}>
        {/* <span className={styles.decoration}></span> */}
        <p className={styles.text}>&#128447;&nbsp;&nbsp;{name}</p>
        {/* <p> : </p> */}
        <p className={styles.number}>&#9742;&nbsp;&nbsp;{number}</p>
      </div>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
