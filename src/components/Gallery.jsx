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
const images = importAll(require.context('../images/gallery/', false, /\.(png|jpe?g|svg|JPE?G)$/));

function Gallery() {
  const [open, setOpen] = React.useState(false);
  const [modalImageIndex, setModalImageIndex] = React.useState(0);
  const handleOpen = (i) => {
    setModalImageIndex(i)
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry gutter={64}>
          {imageData.map(({src, title, data}, i) => (
            <div key={`gallery-item-${i}`} className='gallery-item'>
              <img onClick={()=>handleOpen(i)} src={images_tn[i]} className='image' alt={imageData[i]['title']}/>
              <p className='title'>{imageData[i]['title']}</p>
              <p className='details'>{imageData[i]['details']}</p>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <Modal
        open={open}
        handleClose={handleClose}
        images={images}
        imageDetails={imageData}
        index={modalImageIndex}
        setIndex={setModalImageIndex}
      />
    </>
  )
}

export default Gallery;
