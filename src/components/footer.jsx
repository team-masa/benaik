import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">EventMaster</h3>
            <p className="text-sm">Creating unforgettable experiences, one event at a time.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Events', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-yellow-300 transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="bg-white text-purple-600 p-2 rounded-full hover:bg-yellow-300 hover:text-white transition duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="px-4 py-2 bg-white bg-opacity-20 rounded-md placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-yellow-400 text-purple-700 rounded-md hover:bg-yellow-300 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white border-opacity-20 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} EventMaster. All rights reserved.</p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-2"></div>
    </footer>
  );
};

export default Footer