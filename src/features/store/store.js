import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../slice/authSlice';
import adminDataReducer from '../slice/adminDataSlice';
import customerDataReduser  from '../slice/customerDataSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminDataReducer,
    customer: customerDataReduser
  },
});

export default store;