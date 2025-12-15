import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../core/services/api.service';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Alert,
  CircularProgress
} from '@mui/material';

const TravelerApproval = () => {
  const navigate = useNavigate();
  const [travelers, setTravelers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTravelers();
  }, []);

  const fetchTravelers = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await ApiService.getAllTravelers();
      setTravelers(response.data.travelers || []);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch travelers');
      setLoading(false);
    }
  };

  const handleApprove = async (travelerId) => {
    try {
      await ApiService.approveKYC(travelerId);
      // Remove approved traveler from the list
      setTravelers(travelers.filter(traveler => traveler._id !== travelerId));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to approve traveler');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Traveler Approval
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Pending Traveler Approvals
          </Typography>
          
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
              <CircularProgress />
            </Box>
          ) : travelers && travelers.length > 0 ? (
            <List>
              {travelers.map((traveler) => (
                <React.Fragment key={traveler._id}>
                  <ListItem>
                    <ListItemText
                      primary={traveler.name}
                      secondary={`Email: ${traveler.email} | Phone: ${traveler.phone}`}
                    />
                    <ListItemSecondaryAction>
                      <Button 
                        variant="contained" 
                        color="primary"
                        onClick={() => handleApprove(traveler._id)}
                      >
                        Approve
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          ) : (
            <Typography>No pending travelers for approval</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default TravelerApproval;