import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CardActions, 
  Button,
  Alert
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import RoutePath from '../../core/constants/routes.constant';
import useResponsive from '../../core/hooks/useResponsive';
import { showSuccess } from '../../core/utils/toast.util';

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile, isTablet } = useResponsive();
  
  // Get tracking ID from location state or use default
  const trackingId = location.state?.trackingId || 'BMP-2023-001234';

  // Show success message when component mounts
  React.useEffect(() => {
    showSuccess('Booking confirmed successfully! Your tracking ID is ' + trackingId);
  }, [trackingId]);

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '70vh',
      p: isMobile ? 1 : 3
    }}>
      <Card sx={{ 
        maxWidth: isMobile ? 320 : (isTablet ? 400 : 500), 
        width: '100%', 
        textAlign: 'center',
        minHeight: isMobile ? 300 : 400
      }}>
        <CardContent>
          <CheckCircle sx={{ 
            fontSize: isMobile ? 60 : 80, 
            color: 'success.main', 
            mb: isMobile ? 1 : 2 
          }} />
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            gutterBottom
            sx={{ 
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
              mb: isMobile ? 1 : 2
            }}
          >
            Booking Confirmed!
          </Typography>
          <Typography 
            variant="body1" 
            paragraph
            sx={{ 
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
              mb: isMobile ? 1 : 2
            }}
          >
            Your parcel has been successfully booked. A traveler will be assigned to deliver your parcel soon.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph
            sx={{ 
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
              mb: isMobile ? 1 : 2
            }}
          >
            You can track your parcel status in the "My Requests" section of your dashboard.
          </Typography>
          <Alert 
            severity="info" 
            sx={{ 
              mt: isMobile ? 1 : 2,
              '& .MuiAlert-message': {
                fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' }
              }
            }}
          >
            <strong>Tracking ID:</strong> {trackingId}
          </Alert>
        </CardContent>
        <CardActions sx={{ 
          justifyContent: 'center', 
          pb: isMobile ? 2 : 3,
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 1 : 2
        }}>
          <Button 
            variant="contained" 
            color="primary"
            size={isMobile ? "medium" : "large"}
            sx={{ 
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
              height: isMobile ? 36 : 44,
              minWidth: isMobile ? 120 : 150
            }}
            onClick={() => navigate(RoutePath.USER_DASHBOARD)}
            fullWidth={isMobile}
          >
            Go to Dashboard
          </Button>
          <Button 
            variant="outlined" 
            size={isMobile ? "medium" : "large"}
            sx={{ 
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
              height: isMobile ? 36 : 44,
              minWidth: isMobile ? 120 : 150
            }}
            onClick={() => navigate(`${RoutePath.USER_TRACK_PARCEL}/${trackingId}`)}
            fullWidth={isMobile}
          >
            Track Parcel
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default BookingConfirmation;