import PropTypes from 'prop-types';
import styles from './ContactsItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice/contacts';
import { getContactsStatus } from 'redux/slice/selectors';
import { useSelector } from 'react-redux';
import { LoaderButton } from 'components/LoaderButton';
import { useState } from 'react';
import { toast } from 'react-toastify';
export const ContactsItem = props => {
  const { id, name, number } = props;
  const dispatch = useDispatch();
  const deleting = useSelector(getContactsStatus) === 'deleting';
  const [isDeleting, setDeleting] = useState(deleting);
  const handleDeleteContact = async id => {
    setDeleting(true);
    dispatch(deleteContact(id))
      .unwrap()
      .then(res => {
        toast.success(`Contact "${res.name}" is deleting`);
      })
      .catch(error => {
        setDeleting(false);
        console.log(error.message);
        toast.error(`Contact "${name}" is not deleting`);
      });
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
