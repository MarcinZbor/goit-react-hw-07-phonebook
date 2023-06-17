import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectLoading = state => state.contacts.isLoading;

export const selectfilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts
);