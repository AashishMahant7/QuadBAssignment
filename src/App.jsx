import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Typography, Box } from '@mui/material';

const App = () => {
  const profile = useSelector(state => state.profile);
  const history = useHistory();

  useEffect(() => {
    if (!profile.name || !profile.email) {
      history.push('/profile');
    }
  }, [profile, history]);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        To-Do Application
      </Typography>
      <Box display="flex">
        <Box width="35%" padding="20px" bgcolor="#f0f0f0" marginRight="20px">
          <Typography variant="h5">Profile Information</Typography>
          <Typography variant="body1">Name: {profile.name}</Typography>
          <Typography variant="body1">Email: {profile.email}</Typography>
        </Box>
        <Box flex="1">
          <TaskInput />
          <TaskList />
        </Box>
      </Box>
    </Container>
  );
};

export default App;
