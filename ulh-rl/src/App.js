import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Certs from './components/Certs';
import Contact from './components/Contact';
import banner from './images/banner.png'

function App() {
  return (
    <Router>
      <div>
        <img src={banner} alt='banner' className='banner'/>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/certs" element={<Certs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
