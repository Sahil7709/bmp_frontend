import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ApiService from '../../core/services/api.service';
import StorageService from '../../core/services/storage.service';
import { APPLICATION_CONSTANTS, USER_ROLES } from '../../core/constants/app.constant';
import RoutePath from '../../core/constants/routes.constant';
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Alert, 
  CircularProgress,
  Link,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel
} from '@mui/material';
import useResponsive from '../../core/hooks/useResponsive';
import { showSuccess, showError } from '../../core/utils/toast.util';
import { requestOTPForRegistration } from '../../store/slices/authSlice';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isMobile, isTablet } = useResponsive();
  
  // Get the previous page from state or default to home
  const from = location.state?.from?.pathname || '/';
  
  const [step, setStep] = useState(1); // 1 for user info, 2 for phone verification, 3 for OTP
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: USER_ROLES.USER, // Default role
    agreeToTerms: false
  });
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phone) {
      const errorMessage = 'Please enter a phone number';
      setError(errorMessage);
      showError(errorMessage);
      return;
    }
    if (!formData.agreeToTerms) {
      const errorMessage = 'Please agree to the terms and conditions';
      setError(errorMessage);
      showError(errorMessage);
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const response = await dispatch(requestOTPForRegistration(formData.phone)).unwrap();
      setLoading(false);
      setStep(3); // Move to OTP verification step
      showSuccess('OTP sent successfully! Please check your phone.');
    } catch (err) {
      const errorMessage = err.message || err.response?.data?.message || 'Failed to send OTP. Please try again.';
      setError(errorMessage);
      showError(errorMessage);
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      const errorMessage = 'Please enter the OTP';
      setError(errorMessage);
      showError(errorMessage);
      return;
    }
    setLoading(true);
    setError('');
    
    try {
      const response = await ApiService.verifyOTP(formData.phone, otp, formData.role);
      setLoading(false);
      
      // Store token and user data
      StorageService.setData(APPLICATION_CONSTANTS.STORAGE.TOKEN, response.data.token);
      StorageService.setData(APPLICATION_CONSTANTS.STORAGE.USER_DETAILS, JSON.stringify(response.data.user));
      
      // Also store in redux store
      dispatch({ type: 'auth/verifyOTP/fulfilled', payload: response.data });
      
      showSuccess('Registration successful! Welcome to Book My Parcel.');
      
      // Redirect based on user role
      switch (response.data.user.role) {
        case USER_ROLES.USER:
          // Normal users go back to the page they came from
          navigate(from, { replace: true });
          break;
        case USER_ROLES.TRAVELER:
          // Travelers go directly to dashboard after registration
          navigate(RoutePath.TRAVELER_DASHBOARD);
          break;
        case USER_ROLES.ADMIN:
          // Admins go directly to dashboard after registration
          navigate(RoutePath.ADMIN_DASHBOARD);
          break;
        default:
          navigate(from, { replace: true });
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Invalid OTP. Please try again.';
      setError(errorMessage);
      showError(errorMessage);
      setLoading(false);
    }
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      gap: isMobile ? 1 : 2,
      maxWidth: isMobile ? 320 : (isTablet ? 400 : 500),
      margin: '0 auto',
      p: isMobile ? 1 : 3
    }}>
      <Typography 
        variant={isMobile ? "h5" : "h4"} 
        component="h1" 
        gutterBottom
        sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}
      >
        Create Account
      </Typography>
      
      {error && (
        <Alert 
          severity="error" 
          onClose={() => setError('')} 
          sx={{ 
            width: '100%',
            mb: isMobile ? 1 : 2,
            '& .MuiAlert-message': {
              fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
            }
          }}
        >
          {error}
        </Alert>
      )}
      
      {step === 1 && (
        <Box component="form" onSubmit={(e) => { e.preventDefault(); setStep(2); }} sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            margin="normal"
            required
            sx={{ 
              mb: isMobile ? 1 : 2,
              '& .MuiInputLabel-root': {
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
              }
            }}
          />
          
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            margin="normal"
            required
            sx={{ 
              mb: isMobile ? 1 : 2,
              '& .MuiInputLabel-root': {
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
              }
            }}
          />
          
          <FormControl component="fieldset" sx={{ 
            mt: isMobile ? 1 : 2,
            mb: isMobile ? 1 : 2
          }}>
            <FormLabel 
              component="legend"
              sx={{ 
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                mb: isMobile ? 0.5 : 1
              }}
            >
              Select Role
            </FormLabel>
            <RadioGroup
              name="role"
              value={formData.role}
              onChange={handleInputChange}
            >
              <FormControlLabel 
                value={USER_ROLES.USER} 
                control={<Radio size={isMobile ? "small" : "medium"} />} 
                label={
                  <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>
                    User (Send Parcels)
                  </Typography>
                }
              />
              <FormControlLabel 
                value={USER_ROLES.TRAVELER} 
                control={<Radio size={isMobile ? "small" : "medium"} />} 
                label={
                  <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>
                    Traveler (Deliver Parcels)
                  </Typography>
                }
              />
            </RadioGroup>
          </FormControl>
          
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ 
              mt: isMobile ? 1 : 2,
              height: isMobile ? 36 : 44,
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
            }}
          >
            Continue
          </Button>
          
          <Box sx={{ 
            textAlign: 'center', 
            mt: isMobile ? 1 : 2,
            '& .MuiTypography-root': {
              fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
            }
          }}>
            <Typography variant="body2">
              Already have an account?{' '}
              <Link 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigate(RoutePath.AUTH_LOGIN, { state: { from: location.state?.from || { pathname: '/' } } }); }} 
                underline="hover"
                sx={{ 
                  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
                }}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </Box>
      )}
      
      {step === 2 && (
        <Box component="form" onSubmit={handlePhoneSubmit} sx={{ width: '100%' }}>
          <Typography 
            variant="body1" 
            paragraph
            sx={{ 
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
              mb: isMobile ? 1 : 2
            }}
          >
            We'll send a verification code to this number
          </Typography>
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            margin="normal"
            required
            helperText="Enter 10-digit Indian mobile number"
            inputProps={{ maxLength: 10 }}
            sx={{ 
              mb: isMobile ? 1 : 2,
              '& .MuiFormHelperText-root': {
                fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.875rem' }
              },
              '& .MuiInputLabel-root': {
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
              }
            }}
          />
          
          <FormControlLabel
            control={
              <Checkbox
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                required
                size={isMobile ? "small" : "medium"}
              />
            }
            label={
              <Typography 
                variant="body2"
                sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' } }}
              >
                I agree to the{' '}
                <Link href="#" underline="hover">
                  Terms and Conditions
                </Link>
              </Typography>
            }
            sx={{ 
              mt: isMobile ? 1 : 2,
              mb: isMobile ? 1 : 2
            }}
          />
          
          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={loading || !formData.agreeToTerms}
            sx={{ 
              mt: isMobile ? 1 : 2,
              height: isMobile ? 36 : 44,
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
            }}
          >
            {loading ? <CircularProgress size={isMobile ? 20 : 24} /> : 'Send Verification Code'}
          </Button>
          
          <Button
            fullWidth
            variant="outlined"
            onClick={() => setStep(1)}
            sx={{ 
              mt: isMobile ? 0.5 : 1,
              height: isMobile ? 32 : 36,
              fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
            }}
          >
            Back
          </Button>
        </Box>
      )}
      
      {step === 3 && (
        <Box component="form" onSubmit={handleOtpSubmit} sx={{ width: '100%' }}>
          <Typography 
            variant="body1" 
            paragraph
            sx={{ 
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
              mb: isMobile ? 1 : 2
            }}
          >
            Enter the 6-digit code sent to {formData.phone}
          </Typography>
          <TextField
            fullWidth
            label="Verification Code"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            margin="normal"
            required
            inputProps={{ 
              maxLength: 6,
              style: { 
                fontSize: isMobile ? '1.5rem' : '2rem',
                textAlign: 'center',
                letterSpacing: '0.5rem'
              }
            }}
            sx={{ 
              mb: isMobile ? 1 : 2,
              '& .MuiInputLabel-root': {
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
              }
            }}
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={loading}
            sx={{ 
              mt: isMobile ? 1 : 2,
              height: isMobile ? 36 : 44,
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
            }}
          >
            {loading ? <CircularProgress size={isMobile ? 20 : 24} /> : 'Verify and Create Account'}
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => setStep(2)}
            sx={{ 
              mt: isMobile ? 0.5 : 1,
              height: isMobile ? 32 : 36,
              fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
            }}
          >
            Back to Phone
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Register;