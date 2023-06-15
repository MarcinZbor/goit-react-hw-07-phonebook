import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsOperation,
  postContactOperation,
  deleteContactOperation,
} from './operations';

const contactSlise = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    // GET INFORMATION =========================

    [getContactsOperation.pending]: state => {
      state.isLoading = true;
    },
    [getContactsOperation.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [getContactsOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // post INFORMATION =========================

    [postContactOperation.pending]: state => {
      state.isLoading = true;
    },
    [postContactOperation.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    },
    [postContactOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // delet INFORMATION =========================
    [deleteContactOperation.pending]: state => {
      state.isLoading = true;
    },
    [deleteContactOperation.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(contact => contact.id !== payload.id);
    },
    [deleteContactOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const contactsReducer = contactSlise.reducer;
