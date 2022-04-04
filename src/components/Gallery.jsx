import './Gallery.css';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };

// dynamic import of all images from ./images folder
function importAll(r) {
  return r.keys().map(r).reverse();
}
const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));


function Gallery() {

  return (
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter={4}>
        {images.map((image) => (
          <img src={image} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default Gallery;
