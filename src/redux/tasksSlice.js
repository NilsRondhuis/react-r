import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

const taskInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

// for builder notation
const extraActions = [fetchTasks, addTask, deleteTask, toggleCompleted];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

// I can create other function
const fetchTasksFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

const tasksSliceBuilder = createSlice({
  name: 'tasks',
  initialState: taskInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.fulfilled, fetchTasksFulfilledReducer)
      .addCase(addTask.fulfilled, (state, action) => {
        // state.isLoading = false;
        // state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        // state.isLoading = false;
        // state.error = null;
        const index = state.items.findIndex(
          ({ id }) => id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        // state.isLoading = false;
        // state.error = null;
        const index = state.items.findIndex(({ id }) => {
          return id === action.payload.id;
        });
        state.items.splice(index, 1, action.payload);
      })
      .addMatcher(
        isAnyOf(
          // fetchTasks.fulfilled,
          // addTask.fulfilled,
          // deleteTask.fulfilled,
          // toggleCompleted.fulfilled
          ...extraActions.map(action => action.fulfilled)
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      // .addCase(fetchTasks.pending, state => {
      //   state.isLoading = true;
      // })
      // .addCase(addTask.pending, state => {
      //   state.isLoading = true;
      // })
      // .addCase(deleteTask.pending, state => {
      //   state.isLoading = true;
      // })
      // .addCase(toggleCompleted.pending, state => {
      //   state.isLoading = true;
      // })
      .addMatcher(isAnyOf(getActions('pending')), state => {
        state.isLoading = true;
      })
      // .addCase(fetchTasks.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      // .addCase(addTask.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      // .addCase(deleteTask.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      // .addCase(toggleCompleted.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      .addMatcher(isAnyOf(getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

// for obj notation
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: taskInitialState,
  extraReducers: {
    [fetchTasks.pending]: handlePending,
    [fetchTasks.rejected]: handleRejected,
    [addTask.pending]: handlePending,
    [addTask.rejected]: handleRejected,
    [deleteTask.pending]: handlePending,
    [deleteTask.rejected]: handleRejected,
    [toggleCompleted.pending]: handlePending,
    [toggleCompleted.rejected]: handleRejected,

    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(({ id }) => id === action.payload.id);
      state.items.splice(index, 1);
    },

    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(({ id }) => {
        return id === action.payload.id;
      });
      state.items.splice(index, 1, action.payload);
    },
  },
});

export const tasksReducer = tasksSliceBuilder.reducer;
