import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';
import adminDataReducer from '../slice/adminDataSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminDataReducer,
  },
});

export default store;