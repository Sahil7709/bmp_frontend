import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Stepper, 
  Step, 
  StepLabel, 
  StepContent, 
  Paper,
  Chip
} from '@mui/material';
import io from 'socket.io-client';

const UserTrack = () => {
  const { id } = useParams();
  const [activeStep, setActiveStep] = useState(1);
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  
  // Mock delivery data
  const deliverySteps = [
    {
      label: 'Order Placed',
      description: 'Your parcel request has been placed successfully.',
      date: 'Jun 10, 2023 10:30 AM',
      status: 'completed'
    },
    {
      label: 'Traveler Assigned',
      description: 'A traveler has accepted your request.',
      date: 'Jun 10, 2023 2:15 PM',
      status: 'completed'
    },
    {
      label: 'Parcel Picked Up',
      description: 'Your parcel has been picked up by the traveler.',
      date: 'Jun 11, 2023 9:45 AM',
      status: 'completed'
    },
    {
      label: 'In Transit',
      description: 'Your parcel is on its way to the destination.',
      date: 'Jun 11, 2023 11:20 AM',
      status: 'active'
    },
    {
      label: 'Out for Delivery',
      description: 'Your parcel is out for delivery.',
      date: '',
      status: 'pending'
    },
    {
      label: 'Delivered',
      description: 'Your parcel has been delivered successfully.',
      date: '',
      status: 'pending'
    }
  ];

  // In a real application, you would connect to your WebSocket server
  // const socket = io('http://localhost:5000');
  
  // useEffect(() => {
  //   socket.emit('join-delivery', id);
  //   socket.on('location-update', (data) => {
  //     setLocation(data.location);
  //   });
  //   
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [id]);

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
                Delivery Progress
              </Typography>
              <Stepper activeStep={activeStep} orientation="vertical">
                {deliverySteps.map((step, index) => (
                  <Step key={index} completed={step.status === 'completed'}>
                    <StepLabel>
                      <Typography variant="subtitle1">{step.label}</Typography>
                    </StepLabel>
                    <StepContent>
                      <Typography variant="body2">{step.description}</Typography>
                      {step.date && (
                        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                          {step.date}
                        </Typography>
                      )}
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Delivery Details
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Tracking ID:</strong> {id || 'DEL20230610001'}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Status:</strong> 
                <Chip 
                  label="In Transit" 
                  color="primary" 
                  size="small" 
                  sx={{ ml: 1 }}
                />
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Estimated Delivery:</strong> Jun 12, 2023
              </Typography>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Current Location
              </Typography>
              <Box 
                sx={{ 
                  height: '200px', 
                  bgcolor: '#f0f0f0', 
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography>Map showing current location</Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Latitude: {location.lat.toFixed(6)}, Longitude: {location.lng.toFixed(6)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserTrack;