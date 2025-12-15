// Simple test script to verify parcel booking functionality
import axios from 'axios';

// Test data
const testData = {
  phone: '9876543215', // Using a new phone number
  role: 'USER'
};

// Base URL
const BASE_URL = 'http://localhost:5000/api';

// Parcel booking data - corrected structure
const parcelData = {
  pickup: {
    location: "Mumbai Central, Maharashtra",
    lat: 19.0760,
    lng: 72.8777
  },
  drop: {
    location: "Bangalore Airport, Karnataka",
    lat: 12.9716,
    lng: 77.5946
  },
  parcelInfo: {
    weight: 2.5,
    description: "Electronics",
    fragile: false
  }
};

async function testParcelBooking() {
  console.log('Testing parcel booking flow...');
  
  try {
    // First, register a user
    console.log('\n1. Registering user...');
    let token = '';
    
    // Request OTP for registration
    console.log('   Requesting OTP...');
    let otp = '';
    try {
      const otpResponse = await axios.post(`${BASE_URL}/auth/request-otp`, { phone: testData.phone });
      console.log('   OTP request response:', otpResponse.data);
      
      // In development mode, the OTP is returned in the response
      if (otpResponse.data.otp) {
        otp = otpResponse.data.otp;
        console.log(`   Captured OTP: ${otp}`);
      }
    } catch (error) {
      console.log('   OTP request error:', error.response?.data || error.message);
      return;
    }
    
    // Verify OTP for registration
    console.log('   Verifying OTP...');
    try {
      const verifyResponse = await axios.post(`${BASE_URL}/auth/verify-otp`, { 
        phone: testData.phone, 
        otp: otp,
        role: testData.role
      });
      console.log('   OTP verification response:', verifyResponse.data);
      
      // Save token for later use
      token = verifyResponse.data.token;
      console.log('   User registered successfully!');
    } catch (error) {
      console.log('   OTP verification error:', error.response?.data || error.message);
      return;
    }
    
    // Now test parcel booking
    console.log('\n2. Booking parcel...');
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
      
      const parcelResponse = await axios.post(`${BASE_URL}/user/requests`, parcelData, config);
      console.log('   Parcel booking response:', parcelResponse.data);
      console.log('   Parcel booked successfully!');
    } catch (error) {
      console.log('   Parcel booking error:', error.response?.data || error.message);
    }
    
    console.log('\nTest completed.');
  } catch (error) {
    console.error('Test failed with error:', error.message);
  }
}

// Run the test
testParcelBooking();