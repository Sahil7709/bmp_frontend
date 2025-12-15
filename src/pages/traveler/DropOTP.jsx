import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Box, 
  Typography, 
  Paper, 
  Button,
  Alert,
  TextField,
  CircularProgress
} from '@mui/material';
import { verifyDropOTP } from '../../store/slices/deliverySlice';

const TravelerDropOTP = () => {
  const dispatch = useDispatch();
  const { currentDelivery, loading, error } = useSelector(state => state.deliveries);
  
  const [deliveryId, setDeliveryId] = useState('');
  const [otp, setOtp] = useState('');
  
  const handleVerify = () => {
    if (deliveryId && otp) {
      dispatch(verifyDropOTP({ deliveryId, otp }));
    }
  };
  
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Drop Verification
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      
      {currentDelivery && currentDelivery.status === 'DELIVERED' && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Drop verified successfully! Delivery completed.
        </Alert>
      )}
      
      <Paper sx={{ p: 3, mt: 2 }}>
        <TextField
          fullWidth
          label="Delivery ID"
          value={deliveryId}
          onChange={(e) => setDeliveryId(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Drop OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          margin="normal"
          required
        />
        <Button
          variant="contained"
          onClick={handleVerify}
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? <CircularProgress size={24} /> : 'Verify Drop'}
        </Button>
      </Paper>
    </Box>
  );
};

export default TravelerDropOTP;