import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Button,
  TextField,
  Chip
} from '@mui/material';
import { useSelector } from 'react-redux';

const TravelerProfile = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Traveler Profile
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    defaultValue={user?.name || "Jane Smith"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    defaultValue={user?.email || "jane@example.com"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    defaultValue={user?.phone || "+1234567890"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Role"
                    defaultValue="TRAVELER"
                    disabled
                  />
                </Grid>
              </Grid>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" color="primary">
                  Update Profile
                </Button>
              </Box>
            </CardContent>
          </Card>
          
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                KYC Status
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="body1" sx={{ mr: 2 }}>
                  Current Status:
                </Typography>
                <Chip 
                  label={user?.kycStatus || "PENDING"} 
                  color={
                    user?.kycStatus === "APPROVED" ? "success" : 
                    user?.kycStatus === "REJECTED" ? "error" : "warning"
                  }
                />
              </Box>
              <Typography variant="body2" paragraph>
                {user?.kycStatus === "APPROVED" 
                  ? "Your KYC verification is complete. You can now accept delivery requests."
                  : user?.kycStatus === "REJECTED"
                  ? "Your KYC verification was rejected. Please review the feedback and resubmit."
                  : "Your KYC verification is pending review. This process typically takes 1-2 business days."}
              </Typography>
              <Button 
                variant="outlined" 
                onClick={() => window.location.hash = "/traveler/kyc-submit"}
              >
                {user?.kycStatus === "REJECTED" ? "Resubmit KYC" : "View/Update KYC"}
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Traveler Information
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Completed Deliveries:</strong> 24
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Total Earnings:</strong> $1,250.75
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Average Rating:</strong> 4.8/5.0
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Member Since:</strong> Jan 15, 2023
              </Typography>
              <Typography variant="body1">
                <strong>Last Active:</strong> Today, 10:30 AM
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TravelerProfile;