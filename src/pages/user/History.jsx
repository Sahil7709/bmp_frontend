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
  ListItemSecondaryAction,
  IconButton,
  Chip
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Search as SearchIcon } from '@mui/icons-material';
import { searchRequests } from '../../store/slices/requestSlice';

const UserHistory = () => {
  const dispatch = useDispatch();
  const { requests, loading, error } = useSelector(state => state.requests);
  
  useEffect(() => {
    dispatch(searchRequests({}));
  }, [dispatch]);
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'DELIVERED': return 'success';
      case 'PICKED_UP': return 'primary';
      case 'ACCEPTED': return 'warning';
      case 'MATCHED': return 'info';
      case 'PENDING': return 'default';
      case 'CANCELLED': return 'error';
      default: return 'default';
    }
  };
  
  if (loading) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          Parcel History
        </Typography>
        <LinearProgress />
      </Box>
    );
  }
  
  if (error) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          Parcel History
        </Typography>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }
  
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Parcel History
      </Typography>
      
      {requests.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          You haven't created any parcel requests yet.
        </Alert>
      ) : (
        <Paper sx={{ mt: 2 }}>
          <List>
            {requests.map((request) => (
              <ListItem key={request._id} divider>
                <ListItemText
                  primary={`Request #${request._id.substring(0, 8)}...`}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        {request.parcelInfo.description}
                      </Typography>
                      <br />
                      {`Created: ${new Date(request.createdAt).toLocaleDateString()}`}
                    </>
                  }
                />
                <ListItemSecondaryAction>
                  <Chip 
                    label={request.status} 
                    color={getStatusColor(request.status)} 
                    size="small" 
                    sx={{ mr: 1 }}
                  />
                  <IconButton 
                    component={Link} 
                    to={`/user/track/${request._id}`}
                    edge="end"
                  >
                    <SearchIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default UserHistory;