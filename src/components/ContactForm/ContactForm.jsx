import React from 'react';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlise';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const formSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    const newContact = { name:name, id: nanoid(), number: number};
    contacts.some (contact => name === contact.name)
    ? alert (`${name} is already in contacts.`)
    : dispatch(addContact(newContact));
    event.currentTarget.elements.name.value = ""
    event.currentTarget.elements.name.number = ""

  }

  return (
    <form className={styles.form} onSubmit={formSubmit}>
      <label className={styles.label}>
        <span className={styles.labelText}>Name</span>
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label}>
        <span className={styles.labelText}>Number</span>
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
