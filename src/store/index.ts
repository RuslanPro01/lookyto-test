import { configureStore } from '@reduxjs/toolkit';
import { UserProcess } from './user-process.ts';

export const store = configureStore({
  reducer: UserProcess.reducer
})
