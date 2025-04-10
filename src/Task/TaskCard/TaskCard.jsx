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
      <div className='fixed w-[70vw] top-[10%] bg-[#0c071c] shadow-[0_0_20px_rgba(215,106,255,0.5)]  p-8 rounded-md '>
        <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>
            <div className=''>
             <img className='lg:w-[7rem] lg:h-[7rem] object cover' 
           src='https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1'
            alt='task'/>
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
