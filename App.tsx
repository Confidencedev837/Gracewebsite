
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import FoodShipping from './pages/FoodShipping';
import ServicesPage from './pages/ServicesPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/scrolltotop';
import { Analytics } from '@vercel/analytics/react';

const App: React.FC = () => {


  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#05050a] text-white">
        <Navbar />
        <Analytics />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/food-shipping" element={<FoodShipping />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
