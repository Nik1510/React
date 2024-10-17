import React from 'react';
import { Search, BarChart2, DollarSign, MapPin, BookOpen } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <p className="text-lg mb-8">
        Career Quest offers a comprehensive suite of services designed to guide you through every step of your career journey. Explore our offerings below:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ServiceCard
          icon={<Search className="w-12 h-12 text-blue-500" />}
          title="Career Quiz"
          description="Take our AI-powered assessment to discover career paths that align with your skills, interests, and values."
        />
        <ServiceCard
          icon={<BarChart2 className="w-12 h-12 text-green-500" />}
          title="Job Market Analysis"
          description="Get real-time insights into industry trends, job demand, and required skills for your chosen career path."
        />
        <ServiceCard
          icon={<DollarSign className="w-12 h-12 text-yellow-500" />}
          title="Salary Predictions"
          description="Receive accurate salary forecasts based on your skills, experience, and location to help you negotiate better."
        />
        <ServiceCard
          icon={<MapPin className="w-12 h-12 text-red-500" />}
          title="Personalized Roadmaps"
          description="Get a customized career development plan with actionable steps to achieve your professional goals."
        />
        <ServiceCard
          icon={<BookOpen className="w-12 h-12 text-purple-500" />}
          title="Skill Development Resources"
          description="Access curated learning materials and courses to enhance your skills and stay competitive in your field."
        />
      </div>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-xl font-semibold ml-4">{title}</h2>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Services;