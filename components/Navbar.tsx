
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Food Shipping', path: '/food-shipping' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#05050a]/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12">
              <img
                src="/image/logoaslouseasfavicon.jpeg"
                alt="GLFI Logo"
                className="w-full h-full object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none">
                Grace <span className="text-blue-500">Logistics</span>
              </span>
              <span className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em] mt-1">
                Foods & Items Limited
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${isActive(link.path) ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admin"
              className="flex items-center space-x-1 px-4 py-2 rounded-full border border-blue-500/50 hover:bg-blue-500/10 transition-all text-sm font-semibold"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a14] border-b border-white/10 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/admin"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-2 px-3 py-4 text-base font-medium text-blue-400"
          >
            <LogIn className="w-5 h-5" />
            <span>Admin Login</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
