import { createReducer, combineReducers, createSlice } from '@reduxjs/toolkit';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
} from './actions';
import { fetchUsersAsyncThunk } from './operations';

const isLoading = createReducer(false, {
  [fetchUsersAsyncThunk.pending]: () => true,
  [fetchUsersAsyncThunk.fulfilled]: () => false,
  [fetchUsersAsyncThunk.rejected]: () => false,
});

const users = createReducer([], {
  [fetchUsersAsyncThunk.pending]: () => false,
  [fetchUsersAsyncThunk.fulfilled]: (_, action) => action.payload.reverse(),
});

const error = createReducer(null, {
  [fetchUsersAsyncThunk.pending]: () => false,
  [fetchUsersAsyncThunk.rejected]: (_, action) => action.payload,
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchUsersAsyncThunk.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [fetchUsersAsyncThunk.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        users: action.payload.reverse(),
      };
    },
    [fetchUsersAsyncThunk.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export default booksSlice.reducer;
