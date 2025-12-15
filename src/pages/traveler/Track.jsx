import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Button,
  TextField
} from '@mui/material';
import io from 'socket.io-client';

const TravelerTrack = () => {
  const { id } = useParams();
  const [location, setLocation] = useState({ lat: 40.7128, lng: -74.0060 });
  const [isTracking, setIsTracking] = useState(false);
  
  // In a real application, you would connect to your WebSocket server
  // const socket = io('http://localhost:5000');
  
  const startTracking = () => {
    setIsTracking(true);
    // Simulate location updates
    const interval = setInterval(() => {
      setLocation(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.01,
        lng: prev.lng + (Math.random() - 0.5) * 0.01
      }));
    }, 3000);
    
    // In a real application, you would send location updates to the server
    // socket.emit('position-update', { deliveryId: id, location });
    
    return () => clearInterval(interval);
  };
  
  const stopTracking = () => {
    setIsTracking(false);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Track Delivery
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Live Tracking
              </Typography>
              <Box 
                sx={{ 
                  height: '400px', 
                  bgcolor: '#f0f0f0', 
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2
                }}
              >
                <Typography>Interactive Map Showing Delivery Route</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                {!isTracking ? (
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={startTracking}
                  >
                    Start Tracking
                  </Button>
                ) : (
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={stopTracking}
                  >
                    Stop Tracking
                  </Button>
                )}
                <Button variant="outlined">
                  Update Drop-off Location
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Delivery Information
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Delivery ID:</strong> {id || 'DEL20230610001'}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Sender:</strong> John Doe
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Receiver:</strong> Jane Smith
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Pickup:</strong> New York, NY
              </Typography>
              <Typography variant="body1">
                <strong>Drop-off:</strong> Boston, MA
              </Typography>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Current Coordinates
              </Typography>
              <TextField
                fullWidth
                label="Latitude"
                value={location.lat.toFixed(6)}
                margin="normal"
                disabled
              />
              <TextField
                fullWidth
                label="Longitude"
                value={location.lng.toFixed(6)}
                margin="normal"
                disabled
              />
              <Typography variant="body2" sx={{ mt: 1 }}>
                Last updated: Just now
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TravelerTrack;