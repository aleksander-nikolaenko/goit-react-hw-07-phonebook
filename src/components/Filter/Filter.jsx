import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/slice/filter';
import { getFilterValue } from 'redux/slice/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);
  const handleFilterValue = event => {
    dispatch(setFilterValue(event.target.value));
  };

  return (
    <label className={styles.label}>
      <p className={styles.text}>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={handleFilterValue}
      />
    </label>
  );
};
