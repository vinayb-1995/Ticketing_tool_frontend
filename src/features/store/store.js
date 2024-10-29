import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../slice/authSlice';
import adminDataReducer from '../slice/adminDataSlice';
import customerLoginDataReduser  from '../slice/customerLoginDataSlice';
import agentLoginDataReduser  from '../slice/fetchAgentData';
import customerAllDataReducer  from '../slice/fetchCustomerAllData';
import agentsAllDataReducer  from '../slice/fetchAgentsAllData';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminDataReducer,
    customer: customerLoginDataReduser,
    allCustomer:customerAllDataReducer,
    allAgents:agentsAllDataReducer,
    agent: agentLoginDataReduser,
  },
});

export default store;