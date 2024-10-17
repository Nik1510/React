import React from 'react';
import { Search, BarChart2, DollarSign, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Career Quest</h1>
        <p className="text-xl text-gray-600">Your ultimate career guidance platform</p>
      </section>

      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Start Your Career Journey</h2>
          <input
            type="text"
            placeholder="Search for careers, skills, or industries"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Search className="w-12 h-12 text-blue-500" />}
            title="Personalized Career Quiz"
            description="Discover your ideal career path with our AI-powered assessment"
          />
          <FeatureCard
            icon={<BarChart2 className="w-12 h-12 text-green-500" />}
            title="Job Market Analysis"
            description="Get data-driven insights on industry trends and job opportunities"
          />
          <FeatureCard
            icon={<DollarSign className="w-12 h-12 text-yellow-500" />}
            title="Salary Predictions"
            description="Accurate salary forecasts based on your skills and experience"
          />
          <FeatureCard
            icon={<MapPin className="w-12 h-12 text-red-500" />}
            title="Career Roadmaps"
            description="Tailored guidance to achieve your professional goals"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ol className="list-decimal list-inside space-y-4">
            <li>Take our comprehensive career assessment quiz</li>
            <li>Receive personalized career recommendations</li>
            <li>Explore detailed job market insights and salary predictions</li>
            <li>Get a customized roadmap to achieve your career goals</li>
            <li>Access resources and courses to enhance your skills</li>
          </ol>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            quote="Career Quest helped me find my dream job in tech. The personalized roadmap was a game-changer!"
            author="Sarah L., Software Engineer"
          />
          <TestimonialCard
            quote="The salary predictions were spot-on. I felt confident negotiating my new position thanks to Career Quest."
            author="Michael R., Marketing Manager"
          />
        </div>
      </section>

      <section>
        <div className="bg-blue-600 text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-xl mb-6">Join Career Quest today and unlock your professional potential!</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard: React.FC<{ quote: string; author: string }> = ({ quote, author }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <p className="font-semibold">- {author}</p>
  </div>
);

export default Home;