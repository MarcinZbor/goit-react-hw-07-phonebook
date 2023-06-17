import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect } from 'react';
import styles from './ContactList.module.css';
import { selectLoading } from 'redux/selectors';
import { getContactsOperation, deleteContactOperation } from 'redux/operations';
import { createSelector } from '@reduxjs/toolkit';

const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const filteredContactsSelector = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) =>
      filter
        ? contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
        : contacts
  );

  const filteredContacts = useSelector(filteredContactsSelector);

  useEffect(() => {
    dispatch(getContactsOperation());
  }, [dispatch]);

  return (
    <>
      <ul className={styles.list}>
        {filteredContacts.length !== 0 &&
          filteredContacts.map(({ id, name, phone }) => (
            <li key={id} className={styles.item}>
              <p className={styles.p}>
                {name}: {phone}
              </p>
              <button type="button" onClick={() => dispatch(deleteContactOperation(id))}>
                Delete
              </button>
            </li>
          ))}
      </ul>
      {loading && <h3>Loading...</h3>}
    </>
  );
};

export default ContactList;