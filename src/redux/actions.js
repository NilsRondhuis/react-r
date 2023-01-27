import { createAction } from '@reduxjs/toolkit';

//pending
export const fetchUsersRequest = createAction('users/fetchUsersRequest');
//fulfilled
export const fetchUsersSuccess = createAction('users/fetchUsersSuccess');
//error
export const fetchUsersError = createAction('users/fetchUsersError');
