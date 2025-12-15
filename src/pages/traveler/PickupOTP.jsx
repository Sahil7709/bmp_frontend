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
import { verifyPickupOTP } from '../../store/slices/deliverySlice';

const TravelerPickupOTP = () => {
  const dispatch = useDispatch();
  const { currentDelivery, loading, error } = useSelector(state => state.deliveries);
  
  const [deliveryId, setDeliveryId] = useState('');
  const [otp, setOtp] = useState('');
  
  const handleVerify = () => {
    if (deliveryId && otp) {
      dispatch(verifyPickupOTP({ deliveryId, otp }));
    }
  };
  
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Pickup Verification
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      
      {currentDelivery && currentDelivery.status === 'PICKED_UP' && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Pickup verified successfully!
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
          label="Pickup OTP"
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
          {loading ? <CircularProgress size={24} /> : 'Verify Pickup'}
        </Button>
      </Paper>
    </Box>
  );
};

export default TravelerPickupOTP;