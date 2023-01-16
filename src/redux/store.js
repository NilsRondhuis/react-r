import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import { tasksReducer } from './tasksSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: reducer.filtersReducer,
  },
});

export default store;
