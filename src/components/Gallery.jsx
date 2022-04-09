import * as React from 'react';
import './Gallery.css';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Modal from './Modal';

import imageData from '../image-data.json';
imageData = imageData.reverse();

const columnsCountBreakPoints = { 350: 1, 815: 2 };

// dynamic import of all thumbnails
function importAll(r) {
  return r.keys().map(r).reverse();
}
const images_tn = importAll(require.context('../images/gallery/thumbnails/', false, /\.(png|jpe?g|svg)$/));
const images = importAll(require.context('../images/gallery/', false, /\.(png|jpe?g|svg)$/));

function Gallery() {
  const [open, setOpen] = React.useState(false);
  const [modalImage, setModalImage] = React.useState(0);
  const handleOpen = (i) => {
    // e.preventDefault();
    setModalImage(i)
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter={64}>
        {imageData.map(({src, title, data}, i) => (
          <>
          <a onClick={()=>handleOpen(i)}>
            <div className='gallery-item'>
              {/* <img src={'/images/' + src} className='image'/> */}
              <img src={images_tn[i]} className='image' alt={imageData[i]['title']}/>
              <p className='title'>{imageData[i]['title']}</p>
              <p className='details'>{imageData[i]['details']}</p>
            </div>
          </a>
          </>
        ))}
      </Masonry>
    </ResponsiveMasonry>
      <Modal open={open} handleClose={handleClose} image={images[modalImage]} alt={imageData[modalImage]['title']}/>
    </>
  )
}

export default Gallery;
