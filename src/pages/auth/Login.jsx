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
  Tabs,
  Tab,
  Paper
} from '@mui/material';
import useResponsive from '../../core/hooks/useResponsive';
import { showSuccess, showError } from '../../core/utils/toast.util';
import { requestOTP } from '../../store/slices/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isMobile, isTablet } = useResponsive();
  
  // Get the previous page from state or default to home
  const from = location.state?.from?.pathname || '/';
  
  const [tabValue, setTabValue] = useState(0); // 0 for OTP, 1 for Email/Password
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1); // 1 for phone, 2 for OTP (only for OTP login)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    // Clear any existing errors when switching tabs
    setError('');
  };
  
  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (!phone) {
      const errorMessage = 'Please enter a phone number';
      setError(errorMessage);
      showError(errorMessage);
      return;
    }
    setLoading(true);
    setError('');
    
    try {
      const response = await dispatch(requestOTP(phone)).unwrap();
      setLoading(false);
      setStep(2);
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
      // For login, we don't pass a role to verifyOTP
      const response = await ApiService.verifyOTP(phone, otp);
      setLoading(false);
      
      // Store token and user data
      StorageService.setData(APPLICATION_CONSTANTS.STORAGE.TOKEN, response.data.token);
      StorageService.setData(APPLICATION_CONSTANTS.STORAGE.USER_DETAILS, JSON.stringify(response.data.user));
      
      // Also store in redux store
      dispatch({ type: 'auth/verifyOTP/fulfilled', payload: response.data });
      
      showSuccess('Login successful! Welcome back.');
      
      // Redirect based on user role
      redirectToDashboard(response.data.user);
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Invalid OTP. Please try again.';
      setError(errorMessage);
      showError(errorMessage);
      setLoading(false);
    }
  };
  
  const handleEmailPasswordSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      const errorMessage = 'Please enter both email and password';
      setError(errorMessage);
      showError(errorMessage);
      return;
    }
    setLoading(true);
    setError('');
    
    try {
      const response = await ApiService.loginWithEmailAndPassword(email, password);
      setLoading(false);
      
      // Store token and user data
      StorageService.setData(APPLICATION_CONSTANTS.STORAGE.TOKEN, response.data.token);
      StorageService.setData(APPLICATION_CONSTANTS.STORAGE.USER_DETAILS, JSON.stringify(response.data.user));
      
      // Also store in redux store
      dispatch({ type: 'auth/loginWithEmailAndPassword/fulfilled', payload: response.data });
      
      showSuccess('Login successful! Welcome back.');
      
      // Redirect based on user role
      redirectToDashboard(response.data.user);
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Invalid credentials. Please try again.';
      setError(errorMessage);
      showError(errorMessage);
      setLoading(false);
    }
  };
  
  const redirectToDashboard = (user) => {
    switch (user.role) {
      case USER_ROLES.USER:
        // Normal users go back to the page they came from
        navigate(from, { replace: true });
        break;
      case USER_ROLES.TRAVELER:
        // Check if traveler has completed KYC
        if (user.kycStatus === 'APPROVED') {
          navigate(RoutePath.TRAVELER_DASHBOARD);
        } else {
          navigate(RoutePath.TRAVELER_KYC_PENDING);
        }
        break;
      case USER_ROLES.ADMIN:
        navigate(RoutePath.ADMIN_DASHBOARD);
        break;
      default:
        navigate(from, { replace: true });
    }
  };
  
  // Check if already authenticated
  const token = StorageService.getData(APPLICATION_CONSTANTS.STORAGE.TOKEN);
  const userDetails = StorageService.getData(APPLICATION_CONSTANTS.STORAGE.USER_DETAILS);
  
  React.useEffect(() => {
    if (token && userDetails) {
      const user = typeof userDetails === 'string' ? JSON.parse(userDetails) : userDetails;
      redirectToDashboard(user);
    }
  }, [token, userDetails]);
  
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      gap: isMobile ? 1 : 2,
      maxWidth: isMobile ? 320 : (isTablet ? 360 : 400),
      margin: '0 auto',
      p: isMobile ? 1 : 3
    }}>
      <Typography 
        variant={isMobile ? "h5" : "h4"} 
        component="h1" 
        gutterBottom
        sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}
      >
        Book My Parcel
      </Typography>
      
      <Paper sx={{ 
        width: '100%',
        p: isMobile ? 1 : 2
      }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{ 
            mb: isMobile ? 1 : 2,
            minHeight: isMobile ? 36 : 48,
            '& .MuiTab-root': {
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
              minHeight: isMobile ? 36 : 48
            }
          }}
        >
          <Tab label="OTP Login" />
          <Tab label="Email Login" />
        </Tabs>
        
        <Box sx={{ p: isMobile ? 1 : 3 }}>
          {error && (
            <Alert 
              severity="error" 
              onClose={() => setError('')} 
              sx={{ 
                mb: isMobile ? 1 : 2,
                '& .MuiAlert-message': {
                  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
                }
              }}
            >
              {error}
            </Alert>
          )}
          
          {/* OTP Login Tab */}
          {tabValue === 0 && (
            <>
              <Typography 
                variant={isMobile ? "h6" : "h5"} 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                  mb: isMobile ? 1 : 2
                }}
              >
                {step === 1 ? 'Enter Phone Number' : 'Enter OTP'}
              </Typography>
              
              {step === 1 ? (
                <Box component="form" onSubmit={handlePhoneSubmit}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    margin="normal"
                    required
                    helperText="Enter 10-digit Indian mobile number"
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
                    {loading ? <CircularProgress size={isMobile ? 20 : 24} /> : 'Send OTP'}
                  </Button>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleOtpSubmit}>
                  <TextField
                    fullWidth
                    label="OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    margin="normal"
                    required
                    inputProps={{ maxLength: 6 }}
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
                    {loading ? <CircularProgress size={isMobile ? 20 : 24} /> : 'Verify OTP'}
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
                    Back to Phone
                  </Button>
                </Box>
              )}
            </>
          )}
          
          {/* Email/Password Login Tab */}
          {tabValue === 1 && (
            <>
              <Typography 
                variant={isMobile ? "h6" : "h5"} 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                  mb: isMobile ? 1 : 2
                }}
              >
                Email Login
              </Typography>
              
              <Box component="form" onSubmit={handleEmailPasswordSubmit}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin="normal"
                  required
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
                  {loading ? <CircularProgress size={isMobile ? 20 : 24} /> : 'Login'}
                </Button>
              </Box>
            </>
          )}
          
          <Box sx={{ 
            textAlign: 'center', 
            mt: isMobile ? 1 : 2,
            '& .MuiTypography-root': {
              fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
            }
          }}>
            <Typography variant="body2">
              Don't have an account?{' '}
              <Link 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigate(RoutePath.AUTH_REGISTER, { state: { from: location.state?.from || { pathname: '/' } } }); }} 
                underline="hover"
                sx={{ 
                  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
                }}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;