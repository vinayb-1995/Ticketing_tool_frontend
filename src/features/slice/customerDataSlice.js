import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCustomerData = createAsyncThunk(
  'customer/fetchCustomerData',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) {
      return rejectWithValue("No token found");
    }
    
    try {
      const response = await fetch("http://localhost:5000/api/customer/customerdata", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    customerData: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    clearCustomerData: (state) => {
      state.customerData = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCustomerData.fulfilled, (state, action) => {
        state.customerData = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchCustomerData.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'failed';
      });
  },
});

export const { clearCustomerData } = customerSlice.actions;
export default customerSlice.reducer;
