import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
} from './actions';

axios.defaults.baseURL = 'https://623e1178e8fbc4f1626ba3ce.mockapi.io';

export const fetchUsers = () => async dispatch => {
  try {
    dispatch(fetchUsersRequest());
    const response = await axios.get('/users');
    dispatch(fetchUsersSuccess(response.data));
  } catch (error) {
    dispatch(fetchUsersError(error.message));
  }
};

export const fetchUsersAsyncThunk = createAsyncThunk(
  'books/fetchUsersAsyncThunk',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
