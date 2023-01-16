import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 10 },
  reducers: {
    increment(state, action) {
      state.value += action.payload;
    },
    decrement(state, action) {
      state.value -= action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedReducerCounter = persistReducer(
  persistConfig,
  counterSlice.reducer
);

export const { increment, decrement } = counterSlice.actions;
