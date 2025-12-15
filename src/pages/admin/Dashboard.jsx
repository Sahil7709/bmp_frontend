import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button
} from '@mui/material';
import { 
  People, 
  Assignment, 
  TrackChanges, 
  Gavel,
  TrendingUp,
  PendingActions
} from '@mui/icons-material';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);

  // Mock data - in a real app this would come from your API
  const stats = {
    totalUsers: 1240,
    totalTravelers: 320,
    pendingKYC: 15,
    activeDeliveries: 42,
    resolvedDisputes: 8,
    totalRevenue: 12500.75
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Welcome back, {user?.name || 'Administrator'}
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <People sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6" component="div">
                    Total Users
                  </Typography>
                  <Typography variant="h4" component="div">
                    {stats.totalUsers}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Assignment sx={{ fontSize: 40, color: 'secondary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6" component="div">
                    Travelers
                  </Typography>
                  <Typography variant="h4" component="div">
                    {stats.totalTravelers}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUp sx={{ fontSize: 40, color: 'success.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6" component="div">
                    Revenue
                  </Typography>
                  <Typography variant="h4" component="div">
                    ${stats.totalRevenue}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PendingActions sx={{ fontSize: 40, color: 'warning.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6" component="div">
                    Pending KYC
                  </Typography>
                  <Typography variant="h4" component="div">
                    {stats.pendingKYC}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions>
              <Button 
                size="small" 
                onClick={() => navigate('/admin/kyc')}
              >
                Review
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrackChanges sx={{ fontSize: 40, color: 'info.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6" component="div">
                    Active Deliveries
                  </Typography>
                  <Typography variant="h4" component="div">
                    {stats.activeDeliveries}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Gavel sx={{ fontSize: 40, color: 'error.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6" component="div">
                    Resolved Disputes
                  </Typography>
                  <Typography variant="h4" component="div">
                    {stats.resolvedDisputes}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions>
              <Button 
                size="small" 
                onClick={() => navigate('/admin/disputes')}
              >
                View Disputes
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      
      <Box>
        <Typography variant="h5" gutterBottom>
          Admin Tools
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <People sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  User Management
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => navigate('/admin/users')}
                >
                  Manage Users
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Assignment sx={{ fontSize: 48, color: 'secondary.main', mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  KYC Management
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => navigate('/admin/kyc')}
                >
                  Review Applications
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <TrackChanges sx={{ fontSize: 48, color: 'success.main', mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  Delivery Tracking
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => navigate('/admin/deliveries')}
                >
                  Monitor Deliveries
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <TrendingUp sx={{ fontSize: 48, color: 'info.main', mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  Analytics
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => navigate('/admin/analytics')}
                >
                  View Reports
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminDashboard;