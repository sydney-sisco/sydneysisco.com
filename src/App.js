import * as React from 'react';
import './App.css';
import Masonry, {ResponsiveMasonry } from 'react-responsive-masonry';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Header from './components/Header';

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



// dynamic import of all images from ./images folder
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));

// const modals = images.map((image) => (


const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="container">
      <Header />
      {/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <img src={images[0]} alt=""/>
        </Box>
      </Modal> */}
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter={4}>
        {images.map((image) => (
          <img src={image} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
    </div>
    
  );
}

export default App;
