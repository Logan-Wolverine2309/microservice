import React, { useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Modal,
  TextField,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const tags = [
  "Angular", "React", "Vue", "JavaScript", "Python", "Java",
  "C++", "C#", "PHP", "Ruby", "Swift", "Go",
  "Kotlin", "Dart", "TypeScript", "HTML", "CSS"
];

export default function CreateNewTaskForm({ open, handleClose }) {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    tag: [],
    deadline: dayjs(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTagsChange = (event, value) => {
    setFormData(prev => ({
      ...prev,
      tag: value
    }));
  };

  const handleDeadlineChange = (value) => {
    setFormData(prev => ({
      ...prev,
      deadline: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      deadline: formData.deadline.toISOString()
    };

    console.log("Submitted Data:", submissionData);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="create-task-modal-title"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Image URL"
                name="image"
                value={formData.image}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <Autocomplete
                multiple
                options={tags}
                value={formData.tag}
                onChange={handleTagsChange}
                renderInput={(params) => (
                  <TextField {...params} label="Tags" fullWidth />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Deadline"
                  value={formData.deadline}
                  onChange={handleDeadlineChange}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth />
                  )}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ padding: ".9rem" }}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}
