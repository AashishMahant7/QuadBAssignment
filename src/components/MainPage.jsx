import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { Container, Typography, Box, Paper } from '@mui/material';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const profile = useSelector(state => state.profile);

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', textAlign: 'center' }}>
        To-Do Application
      </Typography>
      <Box display="flex" alignItems="flex-start">
        {/* Profile Information */}
        <Paper elevation={3} style={{ width: '35%', padding: '20px', backgroundColor: '#f0f0f0', marginRight: '20px' }}>
          <Typography variant="h5" style={{ marginBottom: '10px', color: '#333333' }}>
            Profile Information:
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '5px', color: '#555555' }}>
            <strong>Name:</strong> {profile.name}
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '5px', color: '#555555' }}>
            <strong>Email:</strong> {profile.email}
          </Typography>
        </Paper>
        
        {/* Task Input and Task List */}
        <Box flex="1">
          <TaskInput />
          <TaskList />
        </Box>
      </Box>
    </Container>
  );
};

export default MainPage;
