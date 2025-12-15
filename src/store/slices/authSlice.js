import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from '../../core/services/api.service';
import { showError, showSuccess } from '../../core/utils/toast.util';

// Initial state
const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
  loading: false,
  error: null
};

// Async thunks
export const requestOTP = createAsyncThunk(
  'auth/requestOTP',
  async (phone, { rejectWithValue }) => {
    try {
      // First check if user exists
      try {
        const checkResponse = await ApiService.checkUserExists({ phone });
        
        if (!checkResponse.data.exists) {
          const errorMessage = 'User not registered. Please register first.';
          showError(errorMessage);
          return rejectWithValue(errorMessage);
        }
      } catch (error) {
        // If check fails, we'll proceed with OTP request
        console.warn('User existence check failed, proceeding with OTP request');
      }
      
      const response = await ApiService.requestOTP(phone);
      showSuccess('OTP sent successfully! Please check your phone.');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to send OTP. Please try again.';
      showError(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const requestOTPForRegistration = createAsyncThunk(
  'auth/requestOTPForRegistration',
  async (phone, { rejectWithValue }) => {
    try {
      // For registration, we don't need to check if user exists
      // We directly request OTP
      const response = await ApiService.requestOTP(phone);
      showSuccess('OTP sent successfully! Please check your phone.');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to send OTP. Please try again.';
      showError(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const verifyOTP = createAsyncThunk(
  'auth/verifyOTP',
  async ({ phone, otp, role }, { rejectWithValue }) => {
    try {
      const response = await ApiService.verifyOTP(phone, otp, role);
      
      // Store token and user in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      showSuccess('Authentication successful!');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Invalid OTP. Please try again.';
      showError(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const loginWithEmailAndPassword = createAsyncThunk(
  'auth/loginWithEmailAndPassword',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await ApiService.loginWithEmailAndPassword(email, password);
      
      // Store token and user in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      showSuccess('Login successful!');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Invalid credentials. Please try again.';
      showError(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      // Clear localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Reset state
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      
      showSuccess('You have been logged out successfully.');
    },
    clearErrors: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Request OTP
      .addCase(requestOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestOTP.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(requestOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Request OTP for Registration
      .addCase(requestOTPForRegistration.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestOTPForRegistration.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(requestOTPForRegistration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Verify OTP
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Login with email and password
      .addCase(loginWithEmailAndPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithEmailAndPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginWithEmailAndPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { logout, clearErrors } = authSlice.actions;

export default authSlice.reducer;