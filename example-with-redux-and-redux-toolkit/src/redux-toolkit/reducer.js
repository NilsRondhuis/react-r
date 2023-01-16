import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from 'redux/actions';

const initialState = {
  value: 0,
};

export const rootReducer = createReducer(initialState, {
  [increment]: (state, action) => {
    return state.value + action.payload;
  },
  [decrement]: (state, action) => {
    return state.value - action.payload;
  },
});
