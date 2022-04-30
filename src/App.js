import * as React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Home from './components/Home';
import Newsletter from './components/Newsletter';
import NoMatch from './components/NoMatch';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop>
      <div className="container">
        <Header />
        <div className='page-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
