import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Modal.css';

export default function BasicModal({ open, handleClose, image, alt }) {

  console.log(image);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='box'>
          <div className='box-padder'>
            <img src={image} className="modal-image" alt={alt} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
