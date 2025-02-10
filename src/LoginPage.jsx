import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Box } from '@mui/material';

//Declare the components
const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  //handle any changes occured in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //HANDLE FORM SUBMISSION

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the page from refreshing.
    console.log('Login Data:', formData); // Logs the email and password to the console.
    alert('Login successful!'); // Displays a success alert.
    navigate('/product-form'); // Redirects to the "/product-form" route.
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: '#ADD8E6', // Set the background color to white
        margin: 0,
      }}
    >
      <Container maxWidth="xs">
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            width: '100%',
            padding: '30px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: 3,
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>

          <TextField
            name="email"
            label="Email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: '20px', padding: '12px' }}
          >
            Login
          </Button>

          {/* NOTE: Signup page is incomplete */}

          <Button
            onClick={() => navigate('/signup')}
            fullWidth
            color="secondary"
            sx={{
              marginTop: '10px',
              textTransform: 'none',
              padding: '12px',
            }}
          >
            Don't have an account? Sign up
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
