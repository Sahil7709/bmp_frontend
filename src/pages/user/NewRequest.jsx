import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../core/services/api.service';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Alert,
  CircularProgress,
  Autocomplete
} from '@mui/material';
import indianCities from '../../data/indianCities.json';
import useResponsive from '../../core/hooks/useResponsive';
import { showSuccess, showError } from '../../core/utils/toast.util';

const UserNewRequest = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const [requestData, setRequestData] = useState({
    pickupLocation: null,
    dropLocation: null,
    parcelType: '',
    weight: '',
    dimensions: '',
    specialInstructions: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRequestData({
      ...requestData,
      [name]: value
    });
  };

  const handleLocationChange = (name, value) => {
    setRequestData({
      ...requestData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Validate form data
    if (!requestData.pickupLocation || !requestData.dropLocation) {
      const errorMessage = 'Please select both pickup and drop locations';
      setError(errorMessage);
      showError(errorMessage);
      setLoading(false);
      return;
    }
    
    if (!requestData.parcelType) {
      const errorMessage = 'Please select a parcel type';
      setError(errorMessage);
      showError(errorMessage);
      setLoading(false);
      return;
    }
    
    if (!requestData.weight || requestData.weight <= 0) {
      const errorMessage = 'Please enter a valid weight';
      setError(errorMessage);
      showError(errorMessage);
      setLoading(false);
      return;
    }
    
    // Prepare data for API
    const apiData = {
      pickup: {
        location: `${requestData.pickupLocation.name}, ${requestData.pickupLocation.state}`,
        lat: requestData.pickupLocation.lat || 19.0760, // Default Mumbai coordinates if not available
        lng: requestData.pickupLocation.lng || 72.8777
      },
      drop: {
        location: `${requestData.dropLocation.name}, ${requestData.dropLocation.state}`,
        lat: requestData.dropLocation.lat || 12.9716, // Default Bangalore coordinates if not available
        lng: requestData.dropLocation.lng || 77.5946
      },
      parcelInfo: {
        weight: parseFloat(requestData.weight),
        description: requestData.parcelType,
        fragile: false
      }
    };
    
    // Add dimensions if provided
    if (requestData.dimensions) {
      const dims = requestData.dimensions.split('x').map(d => parseFloat(d.trim()));
      if (dims.length === 3) {
        apiData.parcelInfo.dimensions = {
          length: dims[0],
          width: dims[1],
          height: dims[2]
        };
      }
    }
    
    // Add special instructions if provided
    if (requestData.specialInstructions) {
      apiData.parcelInfo.description += ` - ${requestData.specialInstructions}`;
    }
    
    try {
      const response = await ApiService.createRequest(apiData);
      
      // Success - redirect to booking confirmation
      setLoading(false);
      setSuccess(true);
      showSuccess('Parcel request created successfully!');
      
      navigate('/user/booking-confirmation', { 
        state: { 
          requestId: response.data.request._id,
          trackingId: `BMP-${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`
        } 
      });
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to create request. Please try again.';
      setError(errorMessage);
      showError(errorMessage);
      setLoading(false);
    }
  };

  // Get unique states for filtering
  const states = [...new Set(indianCities.map(city => city.state))].sort();

  return (
    <Box sx={{ 
      p: isMobile ? 1 : 3,
      maxWidth: isMobile ? '100%' : (isTablet ? '100%' : 1200),
      margin: '0 auto'
    }}>
      <Typography 
        variant={isMobile ? "h5" : "h4"} 
        gutterBottom
        sx={{ 
          fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
          mb: isMobile ? 1 : 2
        }}
      >
        New Parcel Request
      </Typography>
      
      {success && (
        <Alert 
          severity="success" 
          sx={{ 
            mb: isMobile ? 1 : 3,
            '& .MuiAlert-message': {
              fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' }
            }
          }}
        >
          Parcel request created successfully! Redirecting to confirmation page...
        </Alert>
      )}
      
      {error && (
        <Alert 
          severity="error" 
          sx={{ 
            mb: isMobile ? 1 : 3,
            '& .MuiAlert-message': {
              fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' }
            }
          }}
        >
          {error}
        </Alert>
      )}
      
      <Card sx={{ 
        minHeight: isMobile ? 400 : 500
      }}>
        <CardContent>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={isMobile ? 1 : 3}>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={indianCities}
                  getOptionLabel={(option) => `${option.name}, ${option.state}`}
                  value={requestData.pickupLocation}
                  onChange={(e, value) => handleLocationChange('pickupLocation', value)}
                  renderInput={(params) => (
                    <TextField 
                      {...params} 
                      label="Pickup Location" 
                      required 
                      sx={{ 
                        mb: isMobile ? 1 : 2,
                        '& .MuiInputLabel-root': {
                          fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                        }
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={indianCities}
                  getOptionLabel={(option) => `${option.name}, ${option.state}`}
                  value={requestData.dropLocation}
                  onChange={(e, value) => handleLocationChange('dropLocation', value)}
                  renderInput={(params) => (
                    <TextField 
                      {...params} 
                      label="Drop Location" 
                      required 
                      sx={{ 
                        mb: isMobile ? 1 : 2,
                        '& .MuiInputLabel-root': {
                          fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                        }
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl 
                  fullWidth
                  sx={{ 
                    mb: isMobile ? 1 : 2
                  }}
                >
                  <InputLabel
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                    }}
                  >
                    Parcel Type
                  </InputLabel>
                  <Select
                    name="parcelType"
                    value={requestData.parcelType}
                    onChange={handleInputChange}
                    required
                    sx={{ 
                      '& .MuiSelect-select': {
                        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                      }
                    }}
                  >
                    <MenuItem 
                      value="document"
                      sx={{ 
                        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                      }}
                    >
                      Document
                    </MenuItem>
                    <MenuItem 
                      value="electronics"
                      sx={{ 
                        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                      }}
                    >
                      Electronics
                    </MenuItem>
                    <MenuItem 
                      value="clothing"
                      sx={{ 
                        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                      }}
                    >
                      Clothing
                    </MenuItem>
                    <MenuItem 
                      value="food"
                      sx={{ 
                        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                      }}
                    >
                      Food
                    </MenuItem>
                    <MenuItem 
                      value="other"
                      sx={{ 
                        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                      }}
                    >
                      Other
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Weight (kg)"
                  name="weight"
                  type="number"
                  value={requestData.weight}
                  onChange={handleInputChange}
                  required
                  inputProps={{ 
                    min: "0.1", 
                    step: "0.1",
                    style: { 
                      fontSize: isMobile ? '0.9rem' : '1rem'
                    }
                  }}
                  sx={{ 
                    mb: isMobile ? 1 : 2,
                    '& .MuiInputLabel-root': {
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Dimensions (L x W x H in cm)"
                  name="dimensions"
                  value={requestData.dimensions}
                  onChange={handleInputChange}
                  placeholder="e.g., 30 x 20 x 15"
                  sx={{ 
                    mb: isMobile ? 1 : 2,
                    '& .MuiInputLabel-root': {
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                    },
                    '& input': {
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Special Instructions"
                  name="specialInstructions"
                  value={requestData.specialInstructions}
                  onChange={handleInputChange}
                  multiline
                  rows={isMobile ? 3 : 4}
                  sx={{ 
                    mb: isMobile ? 1 : 2,
                    '& .MuiInputLabel-root': {
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                    },
                    '& textarea': {
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                    }
                  }}
                />
              </Grid>
            </Grid>
            
            <Box sx={{ 
              mt: isMobile ? 2 : 3, 
              display: 'flex', 
              gap: isMobile ? 1 : 2,
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <Button 
                variant="contained" 
                color="primary"
                type="submit"
                disabled={loading}
                sx={{ 
                  height: isMobile ? 36 : 44,
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                }}
                fullWidth={isMobile}
              >
                {loading ? <CircularProgress size={isMobile ? 20 : 24} /> : 'Create Request'}
              </Button>
              <Button 
                variant="outlined" 
                onClick={() => navigate('/user/home')}
                sx={{ 
                  height: isMobile ? 36 : 44,
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                }}
                fullWidth={isMobile}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserNewRequest;