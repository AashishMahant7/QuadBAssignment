import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion, editTask } from '../redux/tasksSlice';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Card,
  CardContent,
  Typography,
  Grid,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const [editOpen, setEditOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [editedText, setEditedText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleDeleteTask = id => {
    dispatch(deleteTask(id));
  };

  const handleToggleTaskCompletion = id => {
    dispatch(toggleTaskCompletion(id));
  };

  const handleEditOpen = task => {
    setCurrentTask(task);
    setEditedText(task.text);
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
    setCurrentTask({});
    setEditedText('');
  };

  const handleEditSave = () => {
    dispatch(editTask({ id: currentTask.id, text: editedText }));
    handleEditClose();
  };

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      
      <Grid container spacing={2} alignItems="center" style={{ marginBottom: '10px' }}>
        <Grid item xs={8}>
          <TextField
            label="Search Tasks"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            margin="normal"
            fullWidth
            variant="outlined"
            size="small"
          />
        </Grid>
      </Grid>

      {/* Task List */}
      <List>
        {filteredTasks.map(task => (
          <Card key={task.id} variant="outlined" style={{ marginBottom: '10px' }}>
            <CardContent>
              <ListItem disablePadding>
                {/* Checkbox for task completion */}
                <Checkbox
                  checked={task.completed}
                  tabIndex={-1}
                  disableRipple
                  onClick={() => handleToggleTaskCompletion(task.id)}
                />
                {/* Task text with strike-through if completed */}
                <ListItemText
                  primary={
                    <Typography variant="body1" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                      {task.text}
                    </Typography>
                  }
                />
                {/* Edit and Delete buttons */}
                <IconButton edge="end" aria-label="edit" onClick={() => handleEditOpen(task)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>

     
      <Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            value={editedText}
            onChange={e => setEditedText(e.target.value)}
            margin="dense"
            label="Task"
            fullWidth
            variant="outlined"
            size="small"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskList;
