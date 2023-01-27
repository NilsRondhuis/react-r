import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://623e1178e8fbc4f1626ba3ce.mockapi.io',
  }),
  tagTypes: ['Task'],
  endpoints: builder => ({
    getTasks: builder.query({
      query: () => '/tasks',
      providesTags: ['Task'],
    }),
    deleteTask: builder.mutation({
      query: taskId => ({
        url: `/tasks/${taskId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Task'],
    }),
    createTask: builder.mutation({
      query: newTask => ({
        url: '/tasks',
        method: 'POST',
        body: {
          text: newTask,
        },
      }),
      invalidatesTags: ['Task'],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useCreateTaskMutation,
} = tasksApi;
