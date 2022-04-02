import './App.css';
import Masonry, {ResponsiveMasonry } from 'react-responsive-masonry';

// dynamic import of all images from ./images folder
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));

const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };

function App() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter={4}>
        {images.map((image) => (
          <img src={image} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default App;
