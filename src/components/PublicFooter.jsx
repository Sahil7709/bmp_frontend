import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Button,
  Link
} from '@mui/material';

const PublicFooter = () => {
  const navigate = useNavigate();

  return (
    <Box 
      sx={{ 
        bgcolor: 'primary.main', 
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Book My Parcel
            </Typography>
            <Typography variant="body2">
              Connecting senders with travelers for affordable and eco-friendly parcel delivery.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link 
                component="button" 
                variant="body2" 
                onClick={() => navigate('/')}
                sx={{ color: 'white', textAlign: 'left' }}
              >
                Home
              </Link>
              <Link 
                component="button" 
                variant="body2" 
                onClick={() => navigate('/about')}
                sx={{ color: 'white', textAlign: 'left' }}
              >
                About Us
              </Link>
              <Link 
                component="button" 
                variant="body2" 
                onClick={() => navigate('/services')}
                sx={{ color: 'white', textAlign: 'left' }}
              >
                Services
              </Link>
              <Link 
                component="button" 
                variant="body2" 
                onClick={() => navigate('/contact')}
                sx={{ color: 'white', textAlign: 'left' }}
              >
                Contact Us
              </Link>
              <Link 
                component="button" 
                variant="body2" 
                onClick={() => navigate('/login')}
                sx={{ color: 'white', textAlign: 'left' }}
              >
                Login
              </Link>
              <Link 
                component="button" 
                variant="body2" 
                onClick={() => navigate('/register')}
                sx={{ color: 'white', textAlign: 'left' }}
              >
                Register
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2" paragraph>
              Email: info@bookmyparcel.com
            </Typography>
            <Typography variant="body2" paragraph>
              Phone: +1 (555) 123-4567
            </Typography>
            <Typography variant="body2">
              24/7 Support: +1 (555) 987-6543
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Typography variant="body2" align="center">
            © 2025 Book My Parcel. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PublicFooter;