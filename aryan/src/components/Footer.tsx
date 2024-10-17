import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Career Quest</h3>
            <p className="text-sm">Your ultimate career guidance platform</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-blue-400">About Us</Link></li>
              <li><Link to="/services" className="text-sm hover:text-blue-400">Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/roadmap" className="text-sm hover:text-blue-400">Personalized Roadmap</Link></li>
              <li><Link to="/courses" className="text-sm hover:text-blue-400">Online Courses</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">Email: info@careerquest.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Career Quest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;