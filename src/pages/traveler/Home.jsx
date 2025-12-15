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
  Chip
} from '@mui/material';
import { 
  LocalShipping, 
  Assignment, 
  AccountBalanceWallet, 
  Star,
  TrendingUp,
  PendingActions
} from '@mui/icons-material';
import { useSelector } from 'react-redux';

const TravelerHome = () => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);

  // Mock data - in a real app this would come from your API
  const stats = {
    totalEarnings: 1250.75,
    completedDeliveries: 24,
    pendingDeliveries: 3,
    rating: 4.8
  };

  const recentDeliveries = [
    { id: 1, from: 'New York, NY', to: 'Boston, MA', amount: '$25.00', status: 'Completed' },
    { id: 2, from: 'Chicago, IL', to: 'Detroit, MI', amount: '$18.50', status: 'In Transit' },
    { id: 3, from: 'Los Angeles, CA', to: 'San Francisco, CA', amount: '$12.75', status: 'Pending Pickup' }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Welcome back, {user?.name || 'Traveler'}!
        </Typography>
        <Chip 
          label={user?.kycStatus === 'APPROVED' ? 'Verified' : 'Verification Pending'} 
          color={user?.kycStatus === 'APPROVED' ? 'success' : 'warning'} 
        />
      </Box>
      
      {user?.kycStatus !== 'APPROVED' && (
        <Box sx={{ mb: 3 }}>
          <Card sx={{ bgcolor: 'warning.light', color: 'warning.contrastText' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Complete Your KYC Verification
              </Typography>
              <Typography variant="body2">
                You need to complete your KYC verification to start accepting delivery requests.
              </Typography>
            </CardContent>
            <CardActions>
              <Button 
                variant="contained" 
                color="warning"
                onClick={() => navigate('/traveler/kyc-submit')}
              >
                Complete Verification
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}
      
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccountBalanceWallet sx={{ fontSize: 40, color: 'green', mr: 2 }} />
                <Box>
                  <Typography variant="h6" component="div">
                    Total Earnings
                  </Typography>
                  <Typography variant="h4" component="div">
                    ${stats.totalEarnings}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocalShipping sx={{ fontSize: 40, color: 'blue', mr: 2 }} />
                <Box>
                  <Typography variant="h6" component="div">
                    Completed
                  </Typography>
                  <Typography variant="h4" component="div">
                    {stats.completedDeliveries}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Assignment sx={{ fontSize: 40, color: 'orange', mr: 2 }} />
                <Box>
                  <Typography variant="h6" component="div">
                    Pending
                  </Typography>
                  <Typography variant="h4" component="div">
                    {stats.pendingDeliveries}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Star sx={{ fontSize: 40, color: 'gold', mr: 2 }} />
                <Box>
                  <Typography variant="h6" component="div">
                    Rating
                  </Typography>
                  <Typography variant="h4" component="div">
                    {stats.rating}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5">
            Recent Activity
          </Typography>
          <Button 
            variant="outlined" 
            onClick={() => navigate('/traveler/deliveries')}
          >
            View All
          </Button>
        </Box>
        
        <Grid container spacing={2}>
          {recentDeliveries.map(delivery => (
            <Grid item xs={12} md={4} key={delivery.id}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle1">
                      Delivery #{delivery.id}
                    </Typography>
                    <Chip 
                      label={delivery.status} 
                      size="small"
                      color={
                        delivery.status === 'Completed' ? 'success' : 
                        delivery.status === 'In Transit' ? 'primary' : 'warning'
                      }
                    />
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    From: {delivery.from}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    To: {delivery.to}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Amount: <strong>{delivery.amount}</strong>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    onClick={() => navigate(`/traveler/track/${delivery.id}`)}
                  >
                    Track
                  </Button>
                  <Button 
                    size="small" 
                    onClick={() => navigate('/traveler/feed')}
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
        <Typography variant="h5" gutterBottom>
          Quick Actions
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Assignment sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  Available Requests
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => navigate('/traveler/feed')}
                >
                  View Requests
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <TrendingUp sx={{ fontSize: 48, color: 'success.main', mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  Earnings
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => navigate('/traveler/earnings')}
                >
                  View Earnings
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <PendingActions sx={{ fontSize: 48, color: 'warning.main', mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  KYC Status
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => navigate('/traveler/kyc-submit')}
                >
                  Check Status
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Star sx={{ fontSize: 48, color: 'gold', mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  Reviews
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => navigate('/traveler/profile')}
                >
                  View Reviews
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TravelerHome;