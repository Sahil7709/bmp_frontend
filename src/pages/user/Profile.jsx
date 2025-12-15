import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Button,
  TextField
} from '@mui/material';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        User Profile
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
                    defaultValue={user?.name || "John Doe"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    defaultValue={user?.email || "john.doe@example.com"}
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
                    defaultValue="USER"
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
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                User Information
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Active Requests:</strong> 2
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Completed Deliveries:</strong> 15
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Total Spent:</strong> $185.50
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Member Since:</strong> Feb 10, 2023
              </Typography>
              <Typography variant="body1">
                <strong>Last Login:</strong> Today, 09:15 AM
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;