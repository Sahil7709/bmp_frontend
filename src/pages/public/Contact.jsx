import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Button, 
  Container, 
  Grid, 
  Typography, 
  TextField,
  Card,
  CardContent
} from '@mui/material';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container>
        {/* Contact Hero */}
        <Box sx={{ 
          bgcolor: 'primary.main', 
          color: 'white', 
          py: 8, 
          mb: 6,
          textAlign: 'center',
          borderRadius: '20px'
        }}>
          <Container>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="h5" sx={{ maxWidth: 800, mx: 'auto' }}>
              Have questions? We're here to help. Get in touch with our team.
            </Typography>
          </Container>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Send us a Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        rows={6}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button 
                        type="submit" 
                        variant="contained" 
                        size="large"
                        sx={{ py: 1.5, px: 4 }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Contact Information
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    <strong>Address</strong>
                  </Typography>
                  <Typography variant="body1">
                    123 Delivery Street<br />
                    Logistics City, LC 12345<br />
                    Country
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    <strong>Phone</strong>
                  </Typography>
                  <Typography variant="body1">
                    +1 (555) 123-4567
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    <strong>Email</strong>
                  </Typography>
                  <Typography variant="body1">
                    support@bookmyparcel.com
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    <strong>Business Hours</strong>
                  </Typography>
                  <Typography variant="body1">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Customer Support
                </Typography>
                <Typography variant="body1" paragraph>
                  For immediate assistance with your parcel delivery, please call our 24/7 customer support line:
                </Typography>
                <Typography variant="h6" gutterBottom>
                  24/7 Support: +1 (555) 987-6543
                </Typography>
                <Typography variant="body1">
                  Our support team is available around the clock to help with any delivery issues or inquiries.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* FAQ Section */}
        <Box sx={{ py: 6, mt: 6 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
            Frequently Asked Questions
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    How long does delivery take?
                  </Typography>
                  <Typography variant="body2">
                    Delivery times vary based on distance and traveler availability. 
                    Typically, deliveries are completed within 1-3 days for local routes 
                    and 3-7 days for longer distances.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    How do you ensure package security?
                  </Typography>
                  <Typography variant="body2">
                    All travelers are verified and rated by previous customers. 
                    Packages are tracked in real-time, and both pickup and delivery 
                    require OTP verification for added security.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    What if my package is damaged or lost?
                  </Typography>
                  <Typography variant="body2">
                    All packages are insured up to $1000. In case of damage or loss, 
                    please contact our support team immediately with photos and details. 
                    We will process your claim within 48 hours.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Can I track my package?
                  </Typography>
                  <Typography variant="body2">
                    Yes, you can track your package in real-time through our mobile app 
                    or website. You'll receive notifications at every step of the delivery process.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;