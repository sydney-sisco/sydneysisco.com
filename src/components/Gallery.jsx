import './Gallery.css';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import imageData from '../image-data.json';
imageData = imageData.reverse();

// console.log(imageData[1]['src']);

const columnsCountBreakPoints = { 350: 1, 815: 2 };

// dynamic import of all images from ./images folder
function importAll(r) {
  return r.keys().map(r).reverse();
}
const images = importAll(require.context('../images/gallery/', false, /\.(png|jpe?g|svg)$/));


function Gallery() {

  return (
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter={64}>
        {imageData.map(({src, title, data}, i) => (
          <div>
            {/* <img src={'/images/' + src} className='image'/> */}
            <img src={images[i]} className='image' alt={imageData[i]['title']}/>
            <p className='title'>{imageData[i]['title']}</p>
            <p className='details'>{imageData[i]['details']}</p>
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default Gallery;
