import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SubmissionCard from './SubmissionCard';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 2,
};

const Submission=[1,1]
export default function SubmissionList({handleClose, open}) {
 

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            {Submission.length>0?<div className='space-y-2'>
              {Submission.map((item) =><SubmissionCard/> )}
            </div>: <div className=''>
            <div className='text-center'> No Submission Found</div>
            </div>}
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}
