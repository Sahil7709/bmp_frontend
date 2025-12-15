import React, { useEffect, useState } from 'react';
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
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material';
import { getFeed, acceptMatch } from '../../store/slices/travelerSlice';

const TravelerFeed = () => {
  const dispatch = useDispatch();
  const { feed, loading, error, currentMatch } = useSelector(state => state.traveler);
  
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [fareOffered, setFareOffered] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  
  useEffect(() => {
    dispatch(getFeed({}));
  }, [dispatch]);
  
  const handleAcceptClick = (request) => {
    setSelectedRequest(request);
    setOpenDialog(true);
  };
  
  const handleAcceptConfirm = () => {
    if (selectedRequest && fareOffered) {
      dispatch(acceptMatch({
        matchId: selectedRequest._id,
        fareOffered: parseFloat(fareOffered)
      }));
      setOpenDialog(false);
      setFareOffered('');
    }
  };
  
  if (loading) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          Available Requests
        </Typography>
        <LinearProgress />
      </Box>
    );
  }
  
  if (error) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          Available Requests
        </Typography>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }
  
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Available Requests
      </Typography>
      
      {currentMatch && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Match accepted successfully! Pickup OTP: {currentMatch.otps?.pickupOTP}, 
          Drop OTP: {currentMatch.otps?.dropOTP}
        </Alert>
      )}
      
      {feed.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No available requests at the moment.
        </Alert>
      ) : (
        <Paper sx={{ mt: 2 }}>
          <List>
            {feed.map((request) => (
              <ListItem key={request._id} divider>
                <ListItemText
                  primary={request.parcelInfo.description}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        {`Weight: ${request.parcelInfo.weight} kg`}
                      </Typography>
                      <br />
                      {`From: (${request.pickup.lat}, ${request.pickup.lng})`}
                      <br />
                      {`To: (${request.drop.lat}, ${request.drop.lng})`}
                      <br />
                      {`Created: ${new Date(request.createdAt).toLocaleDateString()}`}
                    </>
                  }
                />
                <ListItemSecondaryAction>
                  <Button 
                    variant="contained" 
                    color="primary"
                    onClick={() => handleAcceptClick(request)}
                  >
                    Accept
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
      
      {/* Accept Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Accept Request</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Enter fare offered for this delivery:
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            label="Fare Offered (₹)"
            type="number"
            fullWidth
            variant="outlined"
            value={fareOffered}
            onChange={(e) => setFareOffered(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAcceptConfirm} variant="contained" color="primary">
            Confirm Accept
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TravelerFeed;