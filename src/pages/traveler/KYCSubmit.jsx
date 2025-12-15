import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Alert
} from '@mui/material';
import { UploadFile, Person, Badge } from '@mui/icons-material';

const KYCSubmit = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    idType: '',
    idNumber: '',
    address: '',
    documents: [],
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would submit the form data to your backend
    console.log('KYC Form submitted:', formData);
    // Show success message and redirect
    alert('KYC documents submitted successfully!');
    navigate('/traveler/kyc-pending');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Submit KYC Documents
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Please provide accurate information and clear documents for faster verification.
      </Alert>
      
      <Card sx={{ maxWidth: 800, mx: 'auto', mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Legal Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              margin="normal"
              required
            />
            
            <FormControl fullWidth margin="normal" required>
              <InputLabel>ID Type</InputLabel>
              <Select
                name="idType"
                value={formData.idType}
                onChange={handleInputChange}
              >
                <MenuItem value="passport">Passport</MenuItem>
                <MenuItem value="driverLicense">Driver's License</MenuItem>
                <MenuItem value="nationalId">National ID Card</MenuItem>
                <MenuItem value="other">Other Government Issued ID</MenuItem>
              </Select>
            </FormControl>
            
            <TextField
              fullWidth
              label="ID Number"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleInputChange}
              margin="normal"
              required
            />
            
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              margin="normal"
              multiline
              rows={3}
              required
            />
            
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Document Upload
              </Typography>
              
              <Box sx={{ border: '1px dashed grey', borderRadius: 1, p: 3, textAlign: 'center', mt: 2 }}>
                <UploadFile sx={{ fontSize: 48, color: 'gray' }} />
                <Typography variant="body1" gutterBottom>
                  Upload clear photos of your ID documents
                </Typography>
                <Button 
                  variant="outlined" 
                  component="label"
                  sx={{ mt: 1 }}
                >
                  Select Files
                  <input type="file" hidden multiple />
                </Button>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Supported formats: JPG, PNG, PDF (Max 5MB each)
                </Typography>
              </Box>
            </Box>
            
            <FormGroup sx={{ mt: 3 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                  />
                }
                label={
                  <Typography variant="body2">
                    I certify that the information provided is true and accurate to the best of my knowledge
                  </Typography>
                }
              />
            </FormGroup>
            
            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                color="primary"
                type="submit"
                disabled={!formData.agreeToTerms}
              >
                Submit for Verification
              </Button>
              <Button 
                variant="outlined" 
                onClick={() => navigate('/traveler/home')}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
      
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Why is KYC required?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Person sx={{ fontSize: 40, color: 'blue' }} />
            <Typography variant="body2">Identity Verification</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Badge sx={{ fontSize: 40, color: 'green' }} />
            <Typography variant="body2">Trust & Safety</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default KYCSubmit;