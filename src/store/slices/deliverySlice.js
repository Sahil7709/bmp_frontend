import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from '../../core/services/api.service';
import { showError, showSuccess } from '../../core/utils/toast.util';

// Initial state
const initialState = {
  currentDelivery: null,
  locationUpdates: [],
  loading: false,
  error: null
};

// Async thunks
export const verifyPickupOTP = createAsyncThunk(
  'deliveries/verifyPickupOTP',
  async (data, { getState, rejectWithValue }) => {
    try {
      const response = await ApiService.verifyPickupOTP(data);
      showSuccess('Pickup verified successfully!');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to verify pickup.';
      showError(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const verifyDropOTP = createAsyncThunk(
  'deliveries/verifyDropOTP',
  async (data, { getState, rejectWithValue }) => {
    try {
      const response = await ApiService.verifyDropOTP(data);
      showSuccess('Drop verified successfully!');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to verify drop.';
      showError(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const updateLocation = createAsyncThunk(
  'deliveries/updateLocation',
  async (locationData, { getState, rejectWithValue }) => {
    try {
      const response = await ApiService.updateLocation(locationData);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to update location.';
      showError(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// Delivery slice
const deliverySlice = createSlice({
  name: 'deliveries',
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
    addLocationUpdate: (state, action) => {
      state.locationUpdates.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      // Verify pickup OTP
      .addCase(verifyPickupOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyPickupOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.currentDelivery = action.payload.delivery;
      })
      .addCase(verifyPickupOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Verify drop OTP
      .addCase(verifyDropOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyDropOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.currentDelivery = action.payload.delivery;
      })
      .addCase(verifyDropOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update location
      .addCase(updateLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.locationUpdates.push(action.payload.location);
      })
      .addCase(updateLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearErrors, addLocationUpdate } = deliverySlice.actions;

export default deliverySlice.reducer;