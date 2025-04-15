import { Avatar, Button, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../ReduxToolkit/AuthSlice';
import { assignedTasktoUser } from '../ReduxToolkit/TaskSlice';
import { useLocation } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '',
  
  outline:"none",
  // boxShadow: 24,
  p: 4,
};

const tasks=[1,1,1,1]



export default function UserList({handleClose, open}) {

  const dispatch = useDispatch();
  const { auth }=useSelector(store=>store);
  const location = useLocation();
  const queryParams= new URLSearchParams(location.search);
  const taskId= queryParams.get("taskId");

React.useEffect((item)=>{
dispatch(getUserList(localStorage.getItem("jwt")));

},[])



const handleAssignedTask=(user)=>[
   dispatch(assignedTasktoUser({userId:user.id,taskId:taskId}))
]
 

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         {
          auth.users.map((item,index) => (
            <>
              <div className='flex items-center justify-between w-full'>
                <div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar 
                      className='border-2 border-[#c24ddd0]'
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQ61aOdEt06K7-Bi7CncJrfcUTwAK9vdsww&s' />
                    </ListItemAvatar>
                    <ListItemText
                      secondary={`@${item.fullName.split("").join("_").toLowerCase()}`}
                      primary={"item.fullName"}
                    />
                  </ListItem>
                </div>
                <div>
                  <Button onClick={()=>handleAssignedTask(item)} className='customeButton'>Select</Button>
                </div>
              </div>
           {index!==tasks.length-1 && <Divider variant="inset" />}
            </>
          ))
         }
        </Box>
      </Modal>
    </div>
  );
}
