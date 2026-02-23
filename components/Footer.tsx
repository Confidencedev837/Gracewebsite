import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05050a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              {/* logo */}
              <img src="/image/logoaslouseasfavicon.jpeg" alt="Grace Logistics Logo" className="h-10 w-auto object-contain rounded-full" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Global logistics experts specializing in Nigerian foodstuff shipping and multi-modal cargo solutions. Your trusted bridge to the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-blue-600 transition-colors rounded-full">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-blue-600 transition-colors rounded-full">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-blue-600 transition-colors rounded-full">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="/#foodstuff" className="hover:text-blue-400 transition-colors">Foodstuff Shipping</a></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-blue-400 transition-colors">Air Cargo Solutions</li>
              <li className="hover:text-blue-400 transition-colors">Sea Freight Logistics</li>
              <li className="hover:text-blue-400 transition-colors">Food Export Handling</li>
              <li className="hover:text-blue-400 transition-colors">Global Sourcing</li>
              <li className="hover:text-blue-400 transition-colors">Customs Clearance</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+234 803 320 4246</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>grace.pggscargo@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>No 12 Afari Ogun steet,
                  Oshodi Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} GLFI Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
