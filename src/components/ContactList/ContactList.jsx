import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlise';
import { getContacts, getFilter } from 'redux/selectors';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = () =>
    filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

      return (
        <ul className={styles.list}>
          {contacts.length !== 0 &&
            filteredContacts().map(({ id, name, number }) => (
              <li key={id} className={styles.item}>
                <p className={styles.p}>
                  {name}: {number}
                </p>
                <button type="button" onClick={() => dispatch(deleteContact(id))}>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      );
    };

export default ContactList;
