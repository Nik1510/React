import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-xl font-bold text-blue-600">
          <Briefcase className="mr-2" />
          Career Quest
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
            <li><Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link></li>
            <li><Link to="/roadmap" className="text-gray-600 hover:text-blue-600">Personalized Roadmap</Link></li>
            <li><Link to="/courses" className="text-gray-600 hover:text-blue-600">Online Courses</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;