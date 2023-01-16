import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  // Имя слайса
  name: 'user',
  // Начальное состояние редюсера слайса
  initialState: {
    login: '',
    isLoggedIn: false,
  },
  // Объект редюсеров
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state, action) {
      state.login = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
