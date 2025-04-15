import { IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserList from '../UserList';
import SubmissionList from '../SubmissionList';
import EditTaskForm from '../EditTaskCard';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../../ReduxToolkit/TaskSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import SubmitFormModel from '../SubmitFormModel';



const role="ROLE_ADMIN"
const TaskCard = ({item}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { auth } = useSelector(store => store);
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
    const updatedParams = new URLSearchParams(location.search);
    updatedParams.set("taskId",item.id);
    navigate(`${location.pathname}?${updatedParams.toString()}`);
    setOpenUserList(true);
    handleMenuClose();
  };

  const [openSubmitFormModel,setOpenSubmitFormModel] =useState(false);
  const handleCloseSubmitFormModel = () => {
    setOpenSubmissionList(false);
  };


  const handleOpenSubmitFormModel = () => {
    const updatedParams = new URLSearchParams(location.search);
    updatedParams.set("taskId",item.id);
    navigate(`${location.pathname}?${updatedParams.toString()}`);
    setOpenSubmitFormModel(true);
    handleMenuClose();
  };

  const [openSubmissionList,setOpenSubmissionList] =useState(false);
  const handleCloseSubmissionList = () => {
    setOpenSubmissionList(false);
  };


  const handleOpenSubmissionList = () => {
    const updatedParams = new URLSearchParams(location.search);
    updatedParams.set("taskId",item.id);
    navigate(`${location.pathname}?${updatedParams.toString()}`);
    setOpenSubmissionList(true);
    handleMenuClose();
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [openUpdateTaskForm,setOpenUpdateTaskForm] =useState(false);
  const handleCloseUpdateTaskForm = () => {
    setOpenUpdateTaskForm(false);
  };


  const handleRemoveTaskIdParams = () => {
    const updatedParams = new URLSearchParams(location.search);
    updatedParams.delete("filter");
                const queryString = updatedParams.toString();
                const updatedPath = queryString ? `${location.pathname}?${queryString}` : 
                location.pathname;
            navigate(updatedPath);
  }
  const handleOpenUpdateTaskModel = () => {
    const updatedParams = new URLSearchParams(location.search);
    updatedParams.set("taskId",item.id);
    navigate(`${location.pathname}?${updatedParams.toString()}`);
    setOpenUpdateTaskForm(true);
    handleMenuClose();
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(item.id));
    
    handleMenuClose();
  };

  return (
    <div>
      <div className='fixed w-[70vw] top-[10%] bg-[#0c071c] shadow-[0_0_20px_rgba(215,106,255,0.5)]  p-8 rounded-md '>
        <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>
            <div className=''>
             <img className='lg:w-[7rem] lg:h-[7rem] object cover' 
           src={item.image}
            alt='task'/>
            </div>

        
        <div className='space-y-5'>
            <div className='space-y-2'>
                <h1 className='font-bold text-lg'>{item.title}</h1>
                <p className='text-gray-500 text-sm'>{item.description} </p>
                </div>

            <div className='flex flex-wrap gap-2 items-center'>

                {item.tags.map(() => <span className='py-1 px-5 rounded-full techtack'>
                    {item}
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
          auth.user?.role === "ROLE_ADMIN" ? (
          <>
          <MenuItem  onClick={handleOpenUserList}>Assined User</MenuItem>
          <MenuItem onClick={handleOpenSubmissionList}>
          See Submissions
          </MenuItem>
          <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
          <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
          </> 
          ) : (
          <>
          <MenuItem onClick={handleOpenSubmitFormModel}>Submit</MenuItem>
          </>
        )}
        </Menu>
       
      
        </div>

      </div>
      <UserList open={openUserList} handleClose={handleCloseUserList} />
      <SubmissionList open={openSubmissionList} handleClose=
      {handleCloseSubmissionList} />
      <EditTaskForm item={item} open={openUpdateTaskForm} 
      handleClose={handleCloseUpdateTaskForm}/>
      <SubmitFormModel open={ openSubmitFormModel } handleClose={handleCloseSubmitFormModel}/>
      </div>
    
  );
};


export default TaskCard
