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

const AdminProfile = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Admin Profile
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
                    defaultValue={user?.name || "Admin User"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    defaultValue={user?.email || "admin@bookmyparcel.com"}
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
                    defaultValue="ADMIN"
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
                Admin Information
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Permissions:</strong> Full Access
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Member Since:</strong> Jan 1, 2023
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Last Login:</strong> Today, 09:30 AM
              </Typography>
              <Typography variant="body1">
                <strong>System Status:</strong> Operational
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminProfile;