import logo from './logo.svg';
import './App.css';

import Masonry, {ResponsiveMasonry } from 'react-responsive-masonry';

const images = [
  "https://cdn.pixabay.com/photo/2020/11/01/19/41/autumn-5704791_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/07/27/02/30/hands-5441201_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/11/08/09/41/deer-5723225_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/11/15/22/08/person-5747420_960_720.jpg",
  "https://cdn.pixabay.com/photo/2020/09/27/04/15/cat-5605615_960_720.jpg",
  "https://cdn.pixabay.com/photo/2020/03/14/21/56/wine-4931923_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/04/19/12/26/thread-5063401_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/07/11/11/34/mam-tor-5393685_1280.jpg",

  "https://cdn.pixabay.com/photo/2020/07/03/14/43/waterdrops-5366584_1280.jpg"
];

const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
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
