import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from '../../core/services/api.service';
import { showError, showSuccess } from '../../core/utils/toast.util';

// Initial state
const initialState = {
  requests: [],
  currentRequest: null,
  loading: false,
  error: null
};

// Async thunks
export const createRequest = createAsyncThunk(
  'requests/createRequest',
  async (requestData, { getState, rejectWithValue }) => {
    try {
      const response = await ApiService.createRequest(requestData);
      showSuccess('Parcel request created successfully!');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to create request. Please try again.';
      showError(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const getRequestById = createAsyncThunk(
  'requests/getRequestById',
  async (id, { getState, rejectWithValue }) => {
    try {
      const response = await ApiService.getRequestById(id);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to fetch request details.';
      showError(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const searchRequests = createAsyncThunk(
  'requests/searchRequests',
  async (params, { getState, rejectWithValue }) => {
    try {
      const response = await ApiService.searchRequests(params);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to search requests.';
      showError(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// Request slice
const requestSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
    setCurrentRequest: (state, action) => {
      state.currentRequest = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Create request
      .addCase(createRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.requests.push(action.payload.request);
        state.currentRequest = action.payload.request;
      })
      .addCase(createRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get request by ID
      .addCase(getRequestById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRequestById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentRequest = action.payload.request;
      })
      .addCase(getRequestById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Search requests
      .addCase(searchRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.requests = action.payload.requests;
      })
      .addCase(searchRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearErrors, setCurrentRequest } = requestSlice.actions;

export default requestSlice.reducer;