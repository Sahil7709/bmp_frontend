import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from '../../core/services/api.service';
import { showError, showSuccess } from '../../core/utils/toast.util';

// Initial state
const initialState = {
  feed: [],
  currentMatch: null,
  loading: false,
  error: null
};

// Async thunks
export const getFeed = createAsyncThunk(
  'traveler/getFeed',
  async (params, { getState, rejectWithValue }) => {
    try {
      const response = await ApiService.getTravelerFeed(params);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to fetch feed.';
      showError(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const acceptMatch = createAsyncThunk(
  'traveler/acceptMatch',
  async ({ matchId, fareOffered }, { getState, rejectWithValue }) => {
    try {
      const response = await ApiService.acceptMatch(matchId, { fareOffered });
      showSuccess('Match accepted successfully!');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to accept match.';
      showError(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// Traveler slice
const travelerSlice = createSlice({
  name: 'traveler',
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Get feed
      .addCase(getFeed.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFeed.fulfilled, (state, action) => {
        state.loading = false;
        state.feed = action.payload.feed;
      })
      .addCase(getFeed.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Accept match
      .addCase(acceptMatch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(acceptMatch.fulfilled, (state, action) => {
        state.loading = false;
        state.currentMatch = action.payload.match;
      })
      .addCase(acceptMatch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearErrors } = travelerSlice.actions;

export default travelerSlice.reducer;