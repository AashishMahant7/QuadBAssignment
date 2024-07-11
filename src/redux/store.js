
// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import profileReducer from './profileSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    profile: profileReducer,
  },
});

export default store;
