import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Autocomplete, Grid, TextField } from '@mui/material';

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

const tags = ["Angular", "React", "Vue", "JavaScript", "Python", "Java", "C++", "C#", "PHP", "Ruby", "Swift", "Go", "Kotlin", "Dart", "TypeScript", "HTML", "CSS"];
export default function CreateNewTaskForm({handleClose, open}) {
  const [formData, setFormData] =useState({
    title:"",
    image:"",
    description:"",
    tag:"",
    deadline: new Date(),
  });

  const [selectedTags, setSelectedTags] = useState([]);


  const handleChange=(e)=>{
    const {name, value}=e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleTagsChange=(event,value)=>{
    setSelectedTags(value);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <TextField
              label="Title"
              fullWidth
              name='title'
              value={formData.title}
              onChange={handleChange}
              /> 
              </Grid>

              <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <TextField
              label="Image "
              fullWidth
              name='image'
              value={formData.image}
              onChange={handleChange}
              /> 
              </Grid>

              <Grid item xs={12}>
              <TextField
              label="Description"
              fullWidth
              name='description'
              value={formData.description}
              onChange={handleChange}
              />
            </Grid>



             <Grid item xs={12} pt-2>
              <Autocomplete
              multiple
              id='multiple-limit-tags'
              options={tags}
              onChange={handleTagsChange}
              getOptionLabel={(option) => option}
              renderInput={(params) => <TextField
                label="Tags"
                fullWidth
                {...params}
               />}
              
              />
            </Grid>

           
          </Grid>
          </Grid>
        </form>
          
        </Box>
      </Modal>
    </div>
  );
}
