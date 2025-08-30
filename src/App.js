import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Home';
import AboutSection from './AboutSection';
import Pricing from './Pricing';
import Pages from './Pages';
import Cart from './Cart';
import Contact from './Contact';
import Register from './Register';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
