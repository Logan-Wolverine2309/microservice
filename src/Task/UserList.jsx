import { Avatar, Button, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';

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
          tasks.map((item,index) => (
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
                      secondary="@flow_state"
                      primary={"Flow State"}
                    />
                  </ListItem>
                </div>
                <div>
                  <Button className='customeButton'>Select</Button>
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
