import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Box, 
  Typography, 
  Paper, 
  LinearProgress, 
  Alert,
  List,
  ListItem,
  ListItemText,
  Chip,
  Grid
} from '@mui/material';
import { getAllUsers, getAllTravelers } from '../../store/slices/adminSlice';

const AdminUsers = () => {
  const dispatch = useDispatch();
  const { users, travelers, loading, error } = useSelector(state => state.admin);
  
  useEffect(() => {
    dispatch(getAllUsers({}));
    dispatch(getAllTravelers({}));
  }, [dispatch]);
  
  if (loading) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          Users Management
        </Typography>
        <LinearProgress />
      </Box>
    );
  }
  
  if (error) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          Users Management
        </Typography>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }
  
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Users Management
      </Typography>
      
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Users ({users.length})
          </Typography>
          {users.length === 0 ? (
            <Alert severity="info" sx={{ mt: 2 }}>
              No users found.
            </Alert>
          ) : (
            <Paper sx={{ mt: 2 }}>
              <List>
                {users.map((user) => (
                  <ListItem key={user._id} divider>
                    <ListItemText
                      primary={user.name}
                      secondary={
                        <>
                          <Typography component="span" variant="body2" color="textPrimary">
                            {user.email}
                          </Typography>
                          <br />
                          {user.phone}
                        </>
                      }
                    />
                    <Chip 
                      label={user.kycStatus} 
                      color={user.kycStatus === 'APPROVED' ? 'success' : 'warning'} 
                      size="small" 
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Travelers ({travelers.length})
          </Typography>
          {travelers.length === 0 ? (
            <Alert severity="info" sx={{ mt: 2 }}>
              No travelers found.
            </Alert>
          ) : (
            <Paper sx={{ mt: 2 }}>
              <List>
                {travelers.map((traveler) => (
                  <ListItem key={traveler._id} divider>
                    <ListItemText
                      primary={traveler.name}
                      secondary={
                        <>
                          <Typography component="span" variant="body2" color="textPrimary">
                            {traveler.email}
                          </Typography>
                          <br />
                          {traveler.phone}
                        </>
                      }
                    />
                    <Chip 
                      label={traveler.kycStatus} 
                      color={traveler.kycStatus === 'APPROVED' ? 'success' : 'warning'} 
                      size="small" 
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminUsers;