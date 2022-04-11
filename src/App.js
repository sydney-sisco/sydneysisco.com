import * as React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className='page-content'>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
