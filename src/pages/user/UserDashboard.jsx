import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button,
  Alert
} from '@mui/material';
import { 
  AddBox, 
  History, 
  TrackChanges, 
  LocalShipping
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import useResponsive from '../../core/hooks/useResponsive';

const UserDashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);
  const { isMobile, isTablet } = useResponsive();

  // Mock data - in a real app this would come from your API
  const stats = {
    activeRequests: 2,
    completedDeliveries: 15,
    totalSpent: 185.50
  };

  const recentRequests = [
    { id: 1, from: 'New York, NY', to: 'Boston, MA', status: 'In Transit', date: '2023-06-15' },
    { id: 2, from: 'Chicago, IL', to: 'Detroit, MI', status: 'Pending', date: '2023-06-18' }
  ];

  return (
    <Box sx={{ p: isMobile ? 1 : 3 }}>
      <Typography 
        variant={isMobile ? "h5" : "h4"} 
        gutterBottom
        sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}
      >
        Welcome back, {user?.name || 'User'}!
      </Typography>
      
      {/* Booking Success Message */}
      <Alert 
        severity="info" 
        sx={{ 
          mb: 3,
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center'
        }}
      >
        <Box sx={{ flexGrow: 1, mb: isMobile ? 1 : 0 }}>
          Welcome to your dashboard! To book a new parcel, please visit the homepage and click "Book My Parcel".
        </Box>
        <Button 
          variant="outlined" 
          size={isMobile ? "small" : "medium"}
          sx={{ 
            ml: isMobile ? 0 : 2,
            mt: isMobile ? 1 : 0,
            fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
          }}
          onClick={() => navigate('/')}
        >
          Go to Homepage
        </Button>
      </Alert>
      
      <Grid container spacing={isMobile ? 1 : 3} sx={{ mb: isMobile ? 1 : 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: isMobile ? 100 : 120 }}>
            <CardContent>
              <Typography 
                variant={isMobile ? "subtitle1" : "h6"} 
                component="div"
                sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' } }}
              >
                Active Requests
              </Typography>
              <Typography 
                variant={isMobile ? "h4" : "h3"} 
                component="div"
                sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
              >
                {stats.activeRequests}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: isMobile ? 100 : 120 }}>
            <CardContent>
              <Typography 
                variant={isMobile ? "subtitle1" : "h6"} 
                component="div"
                sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' } }}
              >
                Completed Deliveries
              </Typography>
              <Typography 
                variant={isMobile ? "h4" : "h3"} 
                component="div"
                sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
              >
                {stats.completedDeliveries}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: isMobile ? 100 : 120 }}>
            <CardContent>
              <Typography 
                variant={isMobile ? "subtitle1" : "h6"} 
                component="div"
                sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' } }}
              >
                Total Spent
              </Typography>
              <Typography 
                variant={isMobile ? "h4" : "h3"} 
                component="div"
                sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
              >
                ${stats.totalSpent}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Box sx={{ mb: isMobile ? 1 : 3 }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 2,
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 1 : 0
        }}>
          <Typography 
            variant={isMobile ? "h6" : "h5"}
            sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' } }}
          >
            Recent Requests
          </Typography>
          <Button 
            variant="outlined" 
            size={isMobile ? "small" : "medium"}
            sx={{ 
              fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' },
              minWidth: isMobile ? 'auto' : 'initial'
            }}
            onClick={() => navigate('/user/history')}
          >
            View All
          </Button>
        </Box>
        
        <Grid container spacing={isMobile ? 1 : 2}>
          {recentRequests.map(request => (
            <Grid item xs={12} key={request.id}>
              <Card>
                <CardContent sx={{ pb: isMobile ? 1 : 2 }}>
                  <Typography 
                    variant={isMobile ? "subtitle1" : "h6"}
                    sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' } }}
                  >
                    Request #{request.id}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="textSecondary"
                    sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' } }}
                  >
                    From: {request.from}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="textSecondary"
                    sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' } }}
                  >
                    To: {request.to}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="textSecondary"
                    sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' } }}
                  >
                    Date: {request.date}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mt: 1,
                      fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
                    }}
                  >
                    Status: <strong>{request.status}</strong>
                  </Typography>
                </CardContent>
                <CardActions sx={{ 
                  pt: 0,
                  justifyContent: 'flex-end',
                  px: isMobile ? 1 : 2,
                  pb: isMobile ? 1 : 2
                }}>
                  <Button 
                    size={isMobile ? "small" : "medium"}
                    sx={{ 
                      fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' },
                      minWidth: isMobile ? 'auto' : 'initial'
                    }}
                    onClick={() => navigate(`/user/track/${request.id}`)}
                  >
                    Track
                  </Button>
                  <Button 
                    size={isMobile ? "small" : "medium"}
                    sx={{ 
                      fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' },
                      minWidth: isMobile ? 'auto' : 'initial'
                    }}
                    onClick={() => navigate('/user/history')}
                  >
                    Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      <Box>
        <Typography 
          variant={isMobile ? "h6" : "h5"} 
          gutterBottom
          sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' } }}
        >
          Quick Actions
        </Typography>
        <Grid container spacing={isMobile ? 1 : 2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ minHeight: isMobile ? 180 : 200 }}>
              <CardContent sx={{ 
                textAlign: 'center',
                pb: isMobile ? 1 : 2
              }}>
                <AddBox sx={{ 
                  fontSize: isMobile ? 32 : 48, 
                  color: 'primary.main', 
                  mb: 1 
                }} />
                <Typography 
                  variant={isMobile ? "subtitle1" : "h6"} 
                  gutterBottom
                  sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' } }}
                >
                  New Request
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: isMobile ? 1 : 2,
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
                  }}
                >
                  Visit homepage to book a parcel
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  size={isMobile ? "small" : "medium"}
                  sx={{ 
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
                  }}
                  onClick={() => navigate('/user/new-request')}
                >
                  Book Parcel
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ minHeight: isMobile ? 180 : 200 }}>
              <CardContent sx={{ 
                textAlign: 'center',
                pb: isMobile ? 1 : 2
              }}>
                <History sx={{ 
                  fontSize: isMobile ? 32 : 48, 
                  color: 'secondary.main', 
                  mb: 1 
                }} />
                <Typography 
                  variant={isMobile ? "subtitle1" : "h6"} 
                  gutterBottom
                  sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' } }}
                >
                  My History
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  size={isMobile ? "small" : "medium"}
                  sx={{ 
                    mt: isMobile ? 1 : 2,
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
                  }}
                  onClick={() => navigate('/user/history')}
                >
                  View History
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ minHeight: isMobile ? 180 : 200 }}>
              <CardContent sx={{ 
                textAlign: 'center',
                pb: isMobile ? 1 : 2
              }}>
                <TrackChanges sx={{ 
                  fontSize: isMobile ? 32 : 48, 
                  color: 'success.main', 
                  mb: 1 
                }} />
                <Typography 
                  variant={isMobile ? "subtitle1" : "h6"} 
                  gutterBottom
                  sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' } }}
                >
                  Track Parcel
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  size={isMobile ? "small" : "medium"}
                  sx={{ 
                    mt: isMobile ? 1 : 2,
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
                  }}
                  onClick={() => navigate('/user/track')}
                >
                  Track Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ minHeight: isMobile ? 180 : 200 }}>
              <CardContent sx={{ 
                textAlign: 'center',
                pb: isMobile ? 1 : 2
              }}>
                <LocalShipping sx={{ 
                  fontSize: isMobile ? 32 : 48, 
                  color: 'warning.main', 
                  mb: 1 
                }} />
                <Typography 
                  variant={isMobile ? "subtitle1" : "h6"} 
                  gutterBottom
                  sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' } }}
                >
                  My Profile
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  size={isMobile ? "small" : "medium"}
                  sx={{ 
                    mt: isMobile ? 1 : 2,
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' }
                  }}
                  onClick={() => navigate('/user/profile')}
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserDashboard;