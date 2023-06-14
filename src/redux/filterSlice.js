import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlise = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: {
      reducer(state, action) {
        return action.payload;
      },
      prepare(e) {
        return {
          payload: e.target.value,
        };
      },
    },
  },
});

export const { setFilter } = filterSlise.actions;
export const filterReducer = filterSlise.reducer;
