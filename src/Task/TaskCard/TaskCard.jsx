import { IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserList from '../UserList';
import SubmissionList from '../SubmissionList';
import EditTaskForm from '../EditTaskCard';



const role="ROLE_ADMIN"
const TaskCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [openUserList,setOpenUserList] =useState(false);
  const handleCloseUserList = () => {
    setOpenUserList(false);
  };
   
  const handleOpenUserList = () => {
    setOpenUserList(true);
    handleMenuClose();
  };

  const [openSubmissionList,setOpenSubmissionList] =useState(false);
  const handleCloseSubmissionList = () => {
    setOpenSubmissionList(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenSubmissionList = () => {
    setOpenSubmissionList(true);
    handleMenuClose();
  };

  const [openUpdateTaskForm,setOpenUpdateTaskForm] =useState(false);
  const handleCloseUpdateTaskForm = () => {
    setOpenUpdateTaskForm(false);
  };

  const handleOpenUpdateTaskModel = () => {
    setOpenUpdateTaskForm(true);
    handleMenuClose();
  };

  const handleDeleteTask = () => {
    
    handleMenuClose();
  };

  return (
    <div>
      <div className='card lg:flex justify-between'>
        <div className='lg:flex gap-5 items-center spy-y-2 w-[90%] lg:w-[70%]'>
            <div className=''>
             <img className='lg:w-[7rem] lg:h-[7rem] object cover' 
             src='data:image/jpeg;base64,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'/>
            </div>

        
        <div className='space-y-5'>
            <div className='space-y-2'>
                <h1 className='font-bold text-lg'>Car Rental Website</h1>
                <p className='text-gray-500 text-sm'>Use latest framworks and technology </p>
                </div>

            <div className='flex flex-wrap gap-2 items-center'>

                {[1].map(() => <span className='py-1 px-5 rounded-full techtack'>
                    Angular 
                </span>)}
                </div>
            </div>
        </div>
        <div>
          <IconButton  
          id="basic-button"
        aria-controls={openMenu? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
        onClick={handleMenuClick}>

            <MoreVertIcon />
          </IconButton>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
      
        
        {
          role==="ROLE_ADMIN" ? <>
          <MenuItem  onClick={handleOpenUserList}>Assined User</MenuItem>
          <MenuItem onClick={handleOpenSubmissionList}>See Submissions</MenuItem>
          <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
          <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
          </> : (
          <></>
        )}
        </Menu>
       
      
        </div>

      </div>
      <UserList open={openUserList} handleClose={handleCloseUserList}/>
      <SubmissionList open={openSubmissionList} handleClose={handleCloseSubmissionList}/>
      <EditTaskForm open={openUpdateTaskForm} handleClose={handleCloseUpdateTaskForm}/>
      </div>
    
  );
};


export default TaskCard
