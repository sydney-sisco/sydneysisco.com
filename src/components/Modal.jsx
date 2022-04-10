import * as React from 'react';
import Modal from '@mui/material/Modal';
import './Modal.css';

export default function BasicModal({ open, handleClose, image, title, details }) {

  const [imageWidth, setImageWidth] = React.useState(0);
  
  const imgElement = React.useRef(null);

  const closeModal = () => {
    setImageWidth(0);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => closeModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='box'>
          <div className='box-padder'>
            <img
              src={image}
              alt={title}
              ref={imgElement}
              onLoad={() => setImageWidth(imgElement.current.width)}
              className="modal-image"
            />
            {imageWidth > 0 && (
              <div
                style={{ width: `${imageWidth}px` }}
                className="overlay"
              >
                <h1>{title}</h1>
                <p>{details}</p>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
