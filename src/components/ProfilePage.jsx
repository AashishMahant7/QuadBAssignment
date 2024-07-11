import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveProfile } from '../redux/profileSlice';
import {
  Container,
  Typography,
  TextField,
  Button,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Deep purple for primary actions
    },
    secondary: {
      main: '#f57c00', // Orange for accents
    },
    background: {
      default: '#f8f9fc', // Light gray background
    },
  },
});

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 2 && email.includes('@') && email.includes('.')) {
      dispatch(saveProfile({ name, email }));
      toast.success('Profile saved successfully');
      navigate('/main');
    } else {
      alert('Please enter a valid name (at least 2 words) and a valid email address.');
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom align="center">
          TO-DO APPLICATION
        </Typography>
        <Typography variant="h5" gutterBottom align="center">
          Profile Page
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            fullWidth
          />
          <Button variant="contained" type="submit" style={{ marginTop: '20px' }}>
            Save Profile
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default ProfilePage;
