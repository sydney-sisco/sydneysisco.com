import './App.css';

import Masonry, {ResponsiveMasonry } from 'react-responsive-masonry';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));

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
