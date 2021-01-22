import {
  createAction,
  createReducer,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import * as api from '../../utils/api';

export const groupPeople = createAction('lunch/groupPeople');
export const fetchPeople = createAsyncThunk(
  'lunch/fetchPeople',
  async (_, THUNK_API) => {
    try {
      const { result, people } = await api.fetchPeople();

      if (result === 'ok') return people;
    } catch (err) {
      throw Error(err);
    }
  }
);

export const addPerson = createAsyncThunk(
  'lunch/addPerson',
  async (name, THUNK_API) => {
    try {
      const { result, person } = await api.addPerson(name);

      if (result === 'created') return person;
    } catch (err) {
      throw Error(err);
    }
  }
);

export const deletePerson = createAsyncThunk(
  'lunch/deletePerson',
  async (id, { getState }) => {
    try {
      const {
        lunch: { people },
      } = getState();
      const { result } = await api.deletePerson(id);

      if (result === 'ok') return people.filter((person) => person._id !== id);
    } catch (err) {
      throw Error(err);
    }
  }
);

const initialState = {
  people: [],
  groups: [],
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
  [deletePerson.fulfilled]: (state, action) => ({
    ...state,
    isLoading: false,
    error: null,
    people: action.payload,
  }),
  [deletePerson.rejected]: (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error.message,
  }),
  [groupPeople]: (state, action) => ({
    ...state,
    groups: action.payload,
  }),
});

export default lunchReducer;
