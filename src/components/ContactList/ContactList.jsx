import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import styles from './ContactList.module.css';
import { getLoading } from 'redux/selectors';
import { getContactsOperation, deleteContactOperation } from 'redux/operations';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  const filteredContacts = () =>
    filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

      useEffect(() => {
        dispatch(getContactsOperation());

      }, [dispatch])

      return (
        <>
        <ul className={styles.list}>
          {contacts.length !== 0 &&
            filteredContacts().map(({ id, name, phone }) => (
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
