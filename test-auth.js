// Simple test script to verify login and registration functionality
import axios from 'axios';

// Test data
const testData = {
  phone: '9876543213', // Using a completely new phone number
  email: 'test4@example.com',
  name: 'Test User 4',
  role: 'USER'
};

// Base URL
const BASE_URL = 'http://localhost:5000/api';

async function testAuthFlow() {
  console.log('Testing authentication flow...');
  
  try {
    // Test 1: Check if user exists (should return false for new user)
    console.log('\n1. Checking if user exists...');
    try {
      const checkResponse = await axios.post(`${BASE_URL}/auth/check-user-exists`, { phone: testData.phone });
      console.log('Check user exists response:', checkResponse.data);
    } catch (error) {
      console.log('Check user exists error:', error.response?.data || error.message);
    }
    
    // Test 2: Request OTP for registration
    console.log('\n2. Requesting OTP for registration...');
    let otp = '';
    try {
      const otpResponse = await axios.post(`${BASE_URL}/auth/request-otp`, { phone: testData.phone });
      console.log('OTP request response:', otpResponse.data);
      
      // In development mode, the OTP is returned in the response
      if (otpResponse.data.otp) {
        otp = otpResponse.data.otp;
        console.log(`Captured OTP: ${otp}`);
      }
    } catch (error) {
      console.log('OTP request error:', error.response?.data || error.message);
    }
    
    // Test 3: Verify OTP for registration (creates new user)
    console.log('\n3. Verifying OTP for registration...');
    try {
      const verifyResponse = await axios.post(`${BASE_URL}/auth/verify-otp`, { 
        phone: testData.phone, 
        otp: otp,
        role: testData.role
      });
      console.log('OTP verification response:', verifyResponse.data);
      
      // Save token for later use
      const token = verifyResponse.data.token;
      
      // Test 4: Logout
      console.log('\n4. Logging out...');
      // In a real app, this would be handled by clearing the token on the client side
      
      // Test 5: Request OTP for login (should work now that user exists)
      console.log('\n5. Requesting OTP for login...');
      let loginOtp = '';
      try {
        const loginOtpResponse = await axios.post(`${BASE_URL}/auth/request-otp`, { phone: testData.phone });
        console.log('Login OTP request response:', loginOtpResponse.data);
        
        // In development mode, the OTP is returned in the response
        if (loginOtpResponse.data.otp) {
          loginOtp = loginOtpResponse.data.otp;
          console.log(`Captured login OTP: ${loginOtp}`);
        }
      } catch (error) {
        console.log('Login OTP request error:', error.response?.data || error.message);
      }
      
      // Test 6: Verify OTP for login
      console.log('\n6. Verifying OTP for login...');
      try {
        const loginVerifyResponse = await axios.post(`${BASE_URL}/auth/verify-otp`, { 
          phone: testData.phone, 
          otp: loginOtp
        });
        console.log('Login OTP verification response:', loginVerifyResponse.data);
      } catch (error) {
        console.log('Login OTP verification error:', error.response?.data || error.message);
      }
      
    } catch (error) {
      console.log('OTP verification error:', error.response?.data || error.message);
    }
    
    console.log('\nTest completed.');
  } catch (error) {
    console.error('Test failed with error:', error.message);
  }
}

// Run the test
testAuthFlow();