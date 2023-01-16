import { createReducer } from '@reduxjs/toolkit';
import statusFilters from './constants';
import actions from './actions';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksReducer = createReducer(tasksInitialState, {
  [actions.addTask]: (state, action) => {
    state.push(action.payload);
  },
  [actions.deleteTask]: (state, action) => {
    const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
  },
  [actions.toggleCompleted]: (state, action) => {
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
      }
    }
  },
});

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case actions.setStatusFilter.type:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

const reducer = { tasksReducer, filtersReducer };

export default reducer;
