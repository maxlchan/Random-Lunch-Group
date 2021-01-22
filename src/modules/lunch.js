import {
  createAction,
  createReducer,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import * as api from '../utils/api';

export const fetchPeople = createAsyncThunk(
  'lunch/fetchPeople',
  async (_, THUNK_API) => {
    try {
      const { person } = await api.fetchPeople();
    } catch (err) {
      throw Error(err);
    }
  }
);

export const addPerson = createAsyncThunk(
  'lunch/addPerson',
  async (name, { getState }) => {
    try {
      const { person } = await api.addPerson(name);

      return person;
    } catch (err) {
      throw Error(err);
    }
  }
);

export const deletePerson = createAsyncThunk(
  'lunch/deletePerson',
  async (name, { getState }) => {
    try {
      const { person } = await api.addPerson(name);

      return person;
    } catch (err) {}
  }
);

const initialState = {
  people: [],
  group: {
    members: [],
  },
  isLoading: false,
  error: null,
};

const lunchReducer = createReducer(initialState, {
  [fetchPeople.pending]: (state, action) => ({
    ...state,
    isLoading: true,
    error: null,
  }),
  [fetchPeople.fulfilled]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: null,
      people: action.payload,
    };
  },
  [fetchPeople.rejected]: (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error.message,
  }),
  [addPerson.pending]: (state, action) => ({
    ...state,
    isLoading: true,
    error: null,
  }),
  [addPerson.fulfilled]: (state, action) => ({
    ...state,
    isLoading: false,
    error: null,
    people: [...state.people, action.payload],
  }),
  [addPerson.rejected]: (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error.message,
  }),
  [deletePerson.pending]: (state, action) => ({
    ...state,
    isLoading: true,
    error: null,
  }),
  [deletePerson.fulfilled]: (state, action) => {
    console.log(state);
    console.log(action.payload);
    return {
      ...state,
      isLoading: false,
      error: null,
      people: [...state.people, action.payload],
    };
  },
  [deletePerson.rejected]: (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error.message,
  }),
});

export default lunchReducer;
