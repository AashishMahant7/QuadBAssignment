import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { TextField, Button, Grid } from '@mui/material';

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={8}>
        <TextField
          label="Task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          margin="normal"
          fullWidth
          variant="outlined" 
          size="small" 
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          fullWidth 
          style={{ height: '100%' }} 
        >
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskInput;
