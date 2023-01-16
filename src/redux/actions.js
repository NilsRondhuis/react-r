import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addTask = createAction('tasks/addTask', text => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});

const deleteTask = createAction('tasks/deleteTask');

const toggleCompleted = createAction('tasks/toggleCompleted');

const setStatusFilter = createAction('filters/setStatusFilter');

const actions = { addTask, deleteTask, toggleCompleted, setStatusFilter };

export default actions;
