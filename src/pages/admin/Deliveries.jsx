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
  Chip
} from '@mui/material';
import { getAllDeliveries } from '../../store/slices/adminSlice';

const AdminDeliveries = () => {
  const dispatch = useDispatch();
  const { deliveries, loading, error } = useSelector(state => state.admin);
  
  useEffect(() => {
    dispatch(getAllDeliveries({}));
  }, [dispatch]);
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'DELIVERED': return 'success';
      case 'PICKED_UP': return 'primary';
      case 'ACCEPTED': return 'warning';
      default: return 'default';
    }
  };
  
  if (loading) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          All Deliveries
        </Typography>
        <LinearProgress />
      </Box>
    );
  }
  
  if (error) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          All Deliveries
        </Typography>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }
  
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        All Deliveries
      </Typography>
      
      {deliveries.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No deliveries found.
        </Alert>
      ) : (
        <Paper sx={{ mt: 2 }}>
          <List>
            {deliveries.map((delivery) => (
              <ListItem key={delivery._id} divider>
                <ListItemText
                  primary={`Delivery #${delivery._id.substring(0, 8)}...`}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        {`Traveler: ${delivery.travelerId?.name || 'Unknown'}`}
                      </Typography>
                      <br />
                      {`Status: ${delivery.status}`}
                      <br />
                      {`Created: ${new Date(delivery.createdAt).toLocaleDateString()}`}
                    </>
                  }
                />
                <Chip 
                  label={delivery.status} 
                  color={getStatusColor(delivery.status)} 
                  size="small" 
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default AdminDeliveries;